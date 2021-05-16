import { useEffect, useState } from "react"
import { api } from "../services/api";
import { Cat } from "../components/Cat";

interface ICats {
  id: number;
  name: string;
  price: number;
}

export function Dashboard() {
  const [cats, setCats] = useState<ICats[]>([]);

  useEffect(() => {
    api.get('/cats').then(response => setCats(response.data))
  }, [])

  return (
    <main >
      {cats.map(cat => (
        <Cat key={cat.id} cat={cat} />
      ))}

    </main>
  )
}