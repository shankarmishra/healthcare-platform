/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          cool: '#F4F8FB',
          warmTint: '#FFF8F1',
          tealTint: '#F0FDFA',
          blueTint: '#EFF6FF',
          greenTint: '#F0FDF4',
          orangeTint: '#FFF7ED',
        },
        text: {
          primary: '#0F172A',
          secondary: '#334155',
          tertiary: '#475569',
          muted: '#64748B',
          placeholder: '#94A3B8',
          disabled: '#CBD5E1',
        },
        border: {
          default: '#E2E8F0',
          light: '#EDF2F7',
          emphasis: '#CBD5E1',
        },
        brand: {
          teal: '#0EA5A4',         // Healthcare Primary
          tealDark: '#0F766E',     // Healthcare Deep Accent
          blue: '#2563EB',         // Medical Blue
          blueDark: '#1D4ED8',     // Deep Blue Accent
        },
        status: {
          success: '#16A34A',      // Completed / Approved
          info: '#2563EB',         // Active / In Progress
          warning: '#D97706',      // Pending / Under Review
          danger: '#DC2626',       // Rejected / Cancelled
          neutral: '#64748B',      // Draft / Offline
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'btn': '12px',
        'card': '16px',
        'hero': '24px',
        'badge': '9999px',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(15, 23, 42, 0.04)',
        'card': '0 8px 24px rgba(15, 23, 42, 0.05)',
        'floating': '0 16px 40px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
