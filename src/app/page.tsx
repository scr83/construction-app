'use client';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto pt-12 pb-20">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-100 p-4 rounded-xl mb-4">
            <Building2 className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold">ConstructionApp</h1>
          <p className="text-gray-600 mt-2">Control de obras en tiempo real</p>
        </div>
        
        <div className="space-y-3">
          <LinkButton href="/auth/login" label="Login" />
          <LinkButton href="/auth/role-selection" label="Role Selection" />
          <LinkButton href="/dashboard" label="Dashboard (Gerencial)" />
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
    </div>
  );
}

function LinkButton({ href, label }) {
  return (
    <Link href={href} className="block w-full bg-white border rounded-xl p-4 text-center font-medium hover:bg-blue-50 transition">
      {label}
    </Link>
  );
}