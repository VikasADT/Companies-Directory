// simple static JSON client — reads /data/companies.json from public/
export async function fetchCompanies() {
  const res = await fetch("/data/companies.json", {
    headers: { "Content-Type": "application/json" }
  });
  if (!res.ok) throw new Error("Failed to load companies");
  const json = await res.json();
  // JSON structure: { companies: [ ... ] }
  return json.companies || [];
}
