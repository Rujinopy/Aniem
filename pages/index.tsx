import type { GetServerSideProps } from 'next'
import { type } from 'os'
import SearchComponents from '../components/searchbar'
import Navbar from '../components/Navbar'
import { useState, useContext, createContext } from "react";
import useSWR from 'swr'

const fetcher = (url: any) => fetch(url).then((res) => res.json())

type anime = {
    url: string,
    title_english: string,
    images: {
      jpg: {
        large_image_url: string,
        image_url: string},
    },
    mal_id : number
}

export default function Home() {

  const [input, setInput] = useState(" ")

    function changeHandler(e: any) {
      setInput(e.target.value)
    }
  const {data, error} = useSWR(`https://api.jikan.moe/v4/anime?letter=${input}`, fetcher)
  console.log(data.data);
  console.log(input);
  
  return (
      <div className="">
          <Navbar />  
          <div id="searchBar" className='mx-auto max-w-3xl mb-8 pt-8'>
            <h2>{input}</h2>
              <SearchComponents changeHandler={changeHandler} value={input}/>
          </div>
          <div className='max-w-8xl flex flex-wrap mx-8'>
            {data.data.map((data: anime)=> (
              <div className='mx-auto'>
              <img className='hover:cursor-pointer hover:scale-125 duration-300 mx-2 my-2 rounded-2xl' key={data.mal_id} src={data.images.jpg.image_url} alt="" />
              </div>
            ))}
          </div>
      </div>
    )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(`https://api.jikan.moe/v4/anime?rating=pg13&status=complete&order_by=popularity&type=tv&sfw=true&sort=asc&limit=50`)
//   const data = await res.json()
//   console.log();
  
//   const datas = data.data
//   // Pass data to the page via props
//   return { props: { datas } }
// }

// const callApi = async () => {
//   try {
//     const res = await fetch(
//       `https://animenewsnetwork.p.rapidapi.com/api.xml`,
//       {
//         method: 'Get',
//       }
//     )
//     const data = await res.json()
//     console.log(data);
//   }
//   catch (err) {
//     console.log(err);
//   }
// }