import { execSync } from 'child_process';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import path from 'path';
import fs from 'fs';

const FFMPEG_PATH = `"${ffmpegInstaller.path}"`;
const ROOT_DIR = process.cwd();
const RAW_DIR = path.join(ROOT_DIR, 'video-output', 'raw');
const OVERLAY_DIR = path.join(ROOT_DIR, 'video-output', 'overlays');
const SEGMENT_DIR = path.join(ROOT_DIR, 'video-output', 'segments');
const FINAL_DIR = path.join(ROOT_DIR, 'video-output', 'final');
const THUMB_DIR = path.join(ROOT_DIR, 'video-output', 'thumbnails');
const FRAMES_DIR = path.join(ROOT_DIR, 'video-output', 'frames');

const chapters = [
  { id: '01', rawName: '02-homepage', titleId: '01' },
  { id: '02', rawName: '02-homepage', titleId: '02' },
  { id: '03', rawName: '03-services', titleId: '03' },
  { id: '04', rawName: '04-search', titleId: '04' },
  { id: '05', rawName: '05-profile', titleId: '05' },
  { id: '06', rawName: '06-booking', titleId: '06' },
  { id: '07', rawName: '07-client', titleId: '07' },
  { id: '08', rawName: '08-professional', titleId: '08' },
  { id: '09', rawName: '09-admin-dashboard', titleId: '09' },
  { id: '10', rawName: '10-kyc-verification', titleId: '10' },
  { id: '11', rawName: '11-matching-dispatch', titleId: '11' },
  { id: '12', rawName: '12-payments-payouts', titleId: '12' },
  { id: '13', rawName: '13-support-notifications', titleId: '13' },
  { id: '14', rawName: '14-organization', titleId: '14' },
  { id: '15', rawName: '15-settings-reports', titleId: '15' },
  { id: '16', rawName: '16-utility', titleId: '16' },
  { id: '17', rawName: '02-homepage', titleId: '17' }
];

function runCmd(cmd) {
  console.log(`Executing: ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

async function buildMasterVideo() {
  console.log('\n========================================');
  console.log('Building Chapter Video Segments...');
  console.log('========================================');

  const concatList = [];

  for (let i = 0; i < chapters.length; i++) {
    const ch = chapters[i];
    const titlePng = path.join(OVERLAY_DIR, `title-card-${ch.titleId}.png`);
    const titleMp4 = path.join(OVERLAY_DIR, `title-card-${ch.titleId}.mp4`);
    const rawWebm = path.join(RAW_DIR, `${ch.rawName}.webm`);
    const rawMp4 = path.join(SEGMENT_DIR, `raw-${ch.id}.mp4`);
    const chapterMp4 = path.join(SEGMENT_DIR, `chapter-${ch.id}.mp4`);

    // 1. Convert title card PNG to 2-second MP4 video
    if (fs.existsSync(titlePng)) {
      const titleCmd = `${FFMPEG_PATH} -y -loop 1 -i "${titlePng}" -t 2 -c:v libx264 -r 30 -pix_fmt yuv420p "${titleMp4}"`;
      runCmd(titleCmd);
    }

    // 2. Convert WebM raw browser video to 1920x1080 30FPS MP4
    if (fs.existsSync(rawWebm)) {
      const rawCmd = `${FFMPEG_PATH} -y -i "${rawWebm}" -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=white" -c:v libx264 -r 30 -pix_fmt yuv420p "${rawMp4}"`;
      runCmd(rawCmd);
    } else {
      // Fallback if raw webm is missing
      console.warn(`Warning: Raw WebM missing for ${ch.rawName}, duplicating title card`);
      fs.copyFileSync(titleMp4, rawMp4);
    }

    // 3. Concatenate title card MP4 + browser recording MP4 into chapter MP4
    const chapterListTxt = path.join(SEGMENT_DIR, `list-${ch.id}.txt`);
    const content = `file '${titleMp4.replace(/\\/g, '/')}'\nfile '${rawMp4.replace(/\\/g, '/')}'`;
    fs.writeFileSync(chapterListTxt, content);

    const concatCmd = `${FFMPEG_PATH} -y -f concat -safe 0 -i "${chapterListTxt}" -c copy "${chapterMp4}"`;
    runCmd(concatCmd);

    concatList.push(`file '${chapterMp4.replace(/\\/g, '/')}'`);
  }

  // 4. Concatenate ALL 17 chapter MP4 files into Master 1080p Video
  console.log('\n========================================');
  console.log('Concatenating Master Walkthrough Video...');
  console.log('========================================');

  const masterListTxt = path.join(FINAL_DIR, 'master-list.txt');
  fs.writeFileSync(masterListTxt, concatList.join('\n'));

  const masterOutput = path.join(FINAL_DIR, 'healthcare-platform-full-product-walkthrough-1920x1080.mp4');
  const masterCmd = `${FFMPEG_PATH} -y -f concat -safe 0 -i "${masterListTxt}" -c copy "${masterOutput}"`;
  runCmd(masterCmd);

  // 5. Generate Short Overview Video (90s teaser cut)
  console.log('\nGenerating 90s Short Overview Video...');
  const shortOutput = path.join(FINAL_DIR, 'healthcare-platform-product-overview-90s.mp4');
  const shortCmd = `${FFMPEG_PATH} -y -i "${masterOutput}" -t 90 -c copy "${shortOutput}"`;
  runCmd(shortCmd);

  // 6. Generate Thumbnail Image
  console.log('\nGenerating Walkthrough Thumbnail PNG...');
  const thumbOutput = path.join(THUMB_DIR, 'healthcare-platform-walkthrough-thumbnail.png');
  const thumbCmd = `${FFMPEG_PATH} -y -ss 00:00:05 -i "${masterOutput}" -vframes 1 "${thumbOutput}"`;
  runCmd(thumbCmd);

  // 7. Extract Frames for Frame QA
  console.log('\nExtracting frames for QA Verification...');
  const frameCmd = `${FFMPEG_PATH} -y -i "${masterOutput}" -vf fps=1/10 "${FRAMES_DIR}/frame-%03d.png"`;
  runCmd(frameCmd);

  console.log('\n🎉 ALL MASTER VIDEO DELIVERABLES BUILT SUCCESSFULLY!');
  console.log(`Master Video: ${masterOutput}`);
  console.log(`Short Overview: ${shortOutput}`);
  console.log(`Thumbnail: ${thumbOutput}`);
}

buildMasterVideo().catch(console.error);
