// Frontend - Components
// Footer.tsx
export default function Footer() {
  //return <footer className="p-4 bg-gray-800 text-white text-center">© 2025 Munawara</footer>;
  return (
    <footer className="text-center p-4 bg-gray-800 text-white">
      <p>&copy; {new Date().getFullYear()} Munawara. All rights reserved.</p>
    </footer>
  );
}
// Footer component for the application