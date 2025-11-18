export const fetchCompanies = async () => {
  const token = localStorage.getItem("auth");

  if (!token) return [];  // user not logged in → no API data

  const res = await fetch("/data/companies.json");
  return await res.json().then((r) => r.companies);
};
