import {Faculty_Glyphic, Rubik} from "next/font/google";

export const rubik = Rubik({
  subsets: ['latin'], // Specify the subset(s) you want to load
  weight: ['300', '400', '500', '600', '700', '800', '900'], // Specify weights
  style: ['normal', 'italic'], // Specify styles
  variable: '--font-rubik', // Optional: Use a CSS variable
});

export const facultyGlyphic = Faculty_Glyphic({
  subsets: ['latin'],
  weight: ['400'], // Adjust based on available weights
  variable: '--font-faculty-glyphic', // Optional: Use a CSS variable
});
