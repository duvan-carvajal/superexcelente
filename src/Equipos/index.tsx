import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';
interface TeamData {
  team: {
    name: string;
    info: {
      city: string;
      founded: string;
      stadium: string;
      president: string;
      last_title: string;
    };
    ranking: {
      position: string;
      competition: string;
    };
    social: {
      facebook: string;
      instagram: string;
      x: string;
    };
    links: {
      store: string;
      tickets: string;
    };
  };
}
function Equipos() {
    const { equipo } = useParams<{ equipo: string }>()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('https://raw.githubusercontent.com/sdtibata/dataliga/main/${equipo}.json')
            const data = await res.json()

            const [data,  setData] = useState<TeamData | null>(null)
            
    
            setData(data.standings[0].ranking)
            
          } catch (error) {
            console.error('Error cargando datos:', error)
          }
        }
    
        fetchData()
      }, [])
  return (
    <>
      <p>{equipo}</p>
    </>
  )
}

export default Equipos