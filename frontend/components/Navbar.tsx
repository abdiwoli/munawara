// frontend/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-2xl font-bold">Munawara</h1>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
