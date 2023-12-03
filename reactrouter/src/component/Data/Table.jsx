import  { useEffect, useState } from 'react';
// import {useLoaderData} from 'react-router-dom'

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const filteredData = json.filter(post => post.userId === 1);
        setData(filteredData);
      });
  }, []);

//  const filterdata = useLoaderData()


  return (
    <table className='table-auto border-2  '>
      <caption className='text-gray-700 font-bold'>Table:Post Data of User 1</caption>
      <thead>
        <tr className='border-2'>
          <th className='border-2'>ID</th>
          <th>Post Title</th>
          <th>Post Body</th>
        </tr>
      </thead>
      <tbody className=''>
        {data.map(post => (
          <tr key={post.id} className='border-2 hover:bg-gray-300 '>
            <td className='border-2 py-2 px-4'>{post.id}</td>
            <td className='border-2 px-4'>{post.title.slice(0,30)}...</td>
            <td className='border-2 px-4'>{post.body.slice(0,70)}...</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;


// export const tableInfoLoader = async()=>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return response.json();
// }
