import Link from 'next/link';

export default function NavLink({ href, icon, text }) {
  return (
    <Link href={href} className="flex items-center space-x-2 hover:text-gray-200">
      {icon}
      <span>{text}</span>
    </Link>
  );
}
