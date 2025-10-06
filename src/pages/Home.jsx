import React, { useEffect, useState } from "react";
import axios from "axios";
import InspirationSection from "../components/InspirationSection";
import CitySection from "../components/CitySection";
import Footer from '../components/Footer';

export default function Home() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("/listings.json", { signal: controller.signal })
      .then((res) => setListings(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message || "Error");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  return (
    <main className=" p-6">
      <div className="">
        {loading && <div className="p-8 text-center">Loading listings…</div>}
        {error && (
          <div className="p-8 text-center text-red-600">
            Error loading listings: {error}
          </div>
        )}
        {!loading && !error && (!listings || listings.length === 0) && (
          <div className="p-8 text-center">No listings found.</div>
        )}

        {!loading && !error && listings && listings.length > 0 && (
          <div>
            {listings.map((l) => (
              <CitySection key={l.city} city={l.city} items={l.items} />
            ))}
          </div>
        )}
      </div>

      <div>
        <InspirationSection />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}
