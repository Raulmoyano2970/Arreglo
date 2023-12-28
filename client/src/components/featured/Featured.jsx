import "./featured.css";
import useFetch from '../../hooks/useFetch'

const Featured = () => {

    const {data ,loading,error,reFetch} = useFetch ("/hotels/countByCity?cities=tokyo,paris,berlin,punta%20cana")

    return (
        <div className="featured">
        { loading ? (
                "Loading please wait"
                ) : (    
                <>
                    <div className="featuredItem">
                        <img src="https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt='paris'
                        className='featuredImg'
                        />
                        <div className='featuredTitles'>
                            <h1>Paris</h1>
                            <h1>{data[1]} properties</h1>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img 
                            src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="tokio" 
                            className='featuredImg'
                            />
                        <div className='featuredTitles'>
                            <h1>tokio</h1>
                            <h1>{data[0]} properties</h1>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img 
                            src="https://images.unsplash.com/photo-1590665783309-1259e4c1ec9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="punta cana3"
                            className='featuredImg' 
                        />
                        <div className='featuredTitles'>
                            <h1>Punta Cana</h1>
                            <h1>{data[2]} properties</h1>
                        </div>
                    </div>
                </>
                )
            }
    </div>
  );
};

export default Featured;




// import useFetch from "../../hooks/use.Fecth";
// import "./featured.css";

// const Featured = () => {

//   const {data,loading,error} = useFetch("/hotels/countByCity?cities=berlin,tokyo,paris")

//   return (
//     <div className="featured">
//      {loading ? ("loading please wait" 
//      ) : ( 
//      <> <div className="featuredItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Berlin</h1>
//           <h2>{data[0]}properties</h2>
//         </div>
//       </div>
      
//       <div className="featuredItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>Madrid</h1>
//           <h2>{data[1]} properties</h2>
//         </div>
//       </div>
//       <div className="featuredItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
//           alt=""
//           className="featuredImg"
//         />
//         <div className="featuredTitles">
//           <h1>London</h1>
//           <h2>{data[2]} properties</h2>
//         </div>
//       </div></>)}
//     </div>
//   );
// };

// export default Featured;