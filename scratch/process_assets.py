import os
import glob
from PIL import Image, ImageDraw, ImageFont

brain_dir = r"C:\Users\xshan\.gemini\antigravity-cli\brain\db9a0e95-a724-4f6e-a739-a23849078ae0"
dest_brand_dir = r"C:\Users\xshan\Desktop\healthcare-platform\public\assets\brand\pulse-n-care"
dest_services_dir = r"C:\Users\xshan\Desktop\healthcare-platform\public\assets\services\home-nursing"

os.makedirs(dest_brand_dir, exist_ok=True)
os.makedirs(dest_services_dir, exist_ok=True)

# 1. Process Photography Assets
hero_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_hero_nurse_*.jpg"))[0]
cutout_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_nurse_cutout_*.jpg"))[0]
kit_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_nursing_kit_*.jpg"))[0]
medication_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_medication_*.jpg"))[0]
equipment_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_equipment_*.jpg"))[0]
mobility_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_mobility_*.jpg"))[0]
bedside_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_bedside_support_*.jpg"))[0]
documentation_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_documentation_*.jpg"))[0]
tube_feeding_jpg = glob.glob(os.path.join(brain_dir, "pulse_n_care_tube_feeding_*.jpg"))[0]

# Existing JPGs
vitals_jpg = os.path.join(dest_services_dir, "pulse-n-care-vitals.jpg")
wound_care_jpg = os.path.join(dest_services_dir, "pulse-n-care-wound-care.jpg")
handover_jpg = os.path.join(dest_services_dir, "pulse-n-care-handover.jpg")

def save_webp(src_path, dest_filename):
    im = Image.open(src_path)
    dest_path = os.path.join(dest_services_dir, dest_filename)
    im.save(dest_path, "WEBP", quality=90)
    print(f"Saved {dest_path}")

def make_transparent_cutout(src_path, dest_filename, tolerance=30):
    im = Image.open(src_path).convert("RGBA")
    data = im.getdata()
    new_data = []
    # top left pixel reference background
    bg_r, bg_g, bg_b, _ = data[0]
    for item in data:
        r, g, b, a = item
        if abs(r - bg_r) < tolerance and abs(g - bg_g) < tolerance and abs(b - bg_b) < tolerance:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))
    im.putdata(new_data)
    dest_path = os.path.join(dest_services_dir, dest_filename)
    im.save(dest_path, "PNG")
    print(f"Saved cutout {dest_path}")

# Save Hero & Key Visuals
save_webp(hero_jpg, "pulse-n-care-home-nursing-hero.webp")
im_hero = Image.open(hero_jpg)
im_hero.save(os.path.join(dest_services_dir, "pulse-n-care-home-nursing-hero.jpg"), "JPEG", quality=90)

make_transparent_cutout(cutout_jpg, "pulse-n-care-nurse-hero.png")
make_transparent_cutout(kit_jpg, "pulse-n-care-nursing-kit.png")
save_webp(cutout_jpg, "pulse-n-care-nurse-portrait.webp")

# Save 10 Service Visuals WebP
save_webp(vitals_jpg, "pulse-n-care-vitals.webp")
save_webp(medication_jpg, "pulse-n-care-medication.webp")
save_webp(wound_care_jpg, "pulse-n-care-wound-care.webp")
save_webp(tube_feeding_jpg, "pulse-n-care-tube-feeding.webp")
save_webp(equipment_jpg, "pulse-n-care-catheter-stoma.webp") # Catheter & sterile supplies visual
save_webp(equipment_jpg, "pulse-n-care-equipment.webp")
save_webp(bedside_jpg, "pulse-n-care-bedside-support.webp")
save_webp(mobility_jpg, "pulse-n-care-mobility.webp")
save_webp(documentation_jpg, "pulse-n-care-documentation.webp")
save_webp(handover_jpg, "pulse-n-care-handover.webp")

# 2. Render Raster Brand PNGs
def create_brand_png(filename, w=800, h=300, is_mark_only=False, is_wordmark_only=False, is_social=False):
    if is_social:
        w, h = 1200, 630
    img = Image.new("RGBA", (w, h), (255, 255, 255, 0 if not is_social else 255))
    draw = ImageDraw.Draw(img)
    
    if is_social:
        # Gradient background fill
        draw.rectangle([0, 0, w, h], fill=(248, 250, 252, 255))
        # Draw teal border
        draw.rectangle([0, 0, w-1, h-1], outline=(13, 126, 128, 255), width=8)
    
    teal = (13, 126, 128, 255)
    coral = (225, 29, 72, 255)
    navy = (15, 23, 42, 255)
    
    cx, cy = w // 2, h // 2
    if is_mark_only:
        # Draw Heart & Waveform Emblem
        draw.ellipse([cx-60, cy-60, cx+60, cy+60], fill=teal)
        # Pulse line
        draw.line([cx-40, cy, cx-15, cy, cx-5, cy-25, cx+5, cy+25, cx+15, cy, cx+40, cy], fill=(255, 255, 255, 255), width=6)
    elif is_wordmark_only:
        # Wordmark
        try:
            font = ImageFont.truetype("arial.ttf", 64)
            font_sub = ImageFont.truetype("arial.ttf", 24)
        except:
            font = ImageFont.load_default()
            font_sub = font
        draw.text((cx-180, cy-35), "Pulse n Care", fill=navy, font=font)
        draw.text((cx-180, cy+35), "Nurse care at doorstep", fill=teal, font=font_sub)
    else:
        # Master Logo (Mark + Wordmark)
        mx = cx - 180
        draw.ellipse([mx-50, cy-50, mx+50, cy+50], fill=teal)
        draw.line([mx-30, cy, mx-10, cy, mx, cy-20, mx+10, cy+20, mx+20, cy, mx+35, cy], fill=(255, 255, 255, 255), width=5)
        try:
            font = ImageFont.truetype("arial.ttf", 54)
            font_sub = ImageFont.truetype("arial.ttf", 22)
        except:
            font = ImageFont.load_default()
            font_sub = font
        draw.text((mx+70, cy-35), "Pulse n Care", fill=navy, font=font)
        draw.text((mx+70, cy+25), "Nurse care at doorstep", fill=teal, font=font_sub)
        
    dest_path = os.path.join(dest_brand_dir, filename)
    img.save(dest_path, "PNG")
    print(f"Created brand PNG {dest_path}")

create_brand_png("pulse-n-care-logo.png", w=1024, h=360)
create_brand_png("pulse-n-care-mark.png", w=400, h=400, is_mark_only=True)
create_brand_png("pulse-n-care-wordmark.png", w=800, h=300, is_wordmark_only=True)
create_brand_png("pulse-n-care-social-preview.png", is_social=True)

print("All asset processing complete!")
