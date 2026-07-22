create table if not exists public.consultations (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  phone text not null check (char_length(phone) between 1 and 30),
  address text not null check (char_length(address) between 1 and 250),
  property_type text not null check (property_type in ('residential', 'commercial', 'agricultural')),
  monthly_bill text not null check (monthly_bill in ('Less than ₹1500', '₹1500 - ₹2500', '₹2500 - ₹4000', '₹4000 - ₹8000', 'More than ₹8000')),
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists consultations_created_at_idx on public.consultations (created_at desc);

alter table public.consultations enable row level security;

-- There are intentionally no public policies. The Next.js server writes using the
-- service-role key, which must never be exposed to browser code.
