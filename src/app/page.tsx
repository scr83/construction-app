'use client';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

// Add this interface for the LinkButton props
interface LinkButtonProps {
  href: string;
  label: string;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto pt-12 pb-8">
        {/* Logo/Header */}
        <div className="flex flex-col items-center mb-8">
          <Building2 className="h-10 w-10 text-blue-600" />
          <h1 className="text-2xl font-bold">ConstructionApp</h1>
          <p className="text-gray-600 mt-2">Control de obras en tiempo real</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <LinkButton href="/auth/login" label="Login" />
          <LinkButton href="/auth/role-selection" label="Role Selection" />
          <LinkButton href="/dashboard" label="Dashboard (Gerencia)" />
          <LinkButton href="/dashboard/operativo" label="Dashboard (Operativo)" />
          <LinkButton href="/projects" label="Projects List" />
          <LinkButton href="/construction-units" label="Construction Units" />
          <LinkButton href="/documentation" label="Documentation" />
          <LinkButton href="/tasks" label="Task Registration" />
          <LinkButton href="/photos" label="Photo Gallery" />
          <LinkButton href="/reports/kpi" label="KPI Dashboard" />
          <LinkButton href="/settings/users" label="User Settings" />
        </div>
      </div>
    </main>
  );
}

function LinkButton({ href, label }: LinkButtonProps) {
  return (
    <Link href={href} className="block w-full bg-white border rounded-xl p-4 text-center font-medium hover:bg-blue-50 transition">
      {label}
    </Link>
  );
}