export const metadata = {
  title: "My Test App",
  description: "Test Deployment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
