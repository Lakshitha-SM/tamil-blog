// // 'use client';
// // import fashionPosts from '../../data/fashionPosts';
// // import Image from 'next/image';
// // import './dashboard.css';

// // export default function UserDashboard() {
    
// //   return (
// //     <div className="dashboard-container">
// //       <h1>Fashion Lookbook</h1>
// //       <p className="subtext">Explore the styles curated just for you</p>

// //       <div className="grid-container">
// //         {fashionPosts.map((post) => (
// //           <div key={post.slug} className="fashion-card">
// //             <Image
// //               src={post.image}
// //               alt={post.title}
// //               width={300}
// //               height={200}
// //               className="card-image"
// //               unoptimized // ✅ for external URLs if domain not allowed
// //             />
// //             <h3>{post.title}</h3>
// //             <p className="card-content">{post.content}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import './dashboard.css';
// import defaultPosts from '../../data/fashionPosts';

// export default function UserDashboard() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const stored = localStorage.getItem('fashionPosts');
//     if (stored) {
//       const customPosts = JSON.parse(stored);
//       const combined = [...defaultPosts, ...customPosts];
//       setPosts(combined);
//     } else {
//       setPosts(defaultPosts);
//     }
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <h1>Fashion Lookbook</h1>
//       <p className="subtext">Explore the styles curated just for you</p>

//       <div className="grid-container">
//         {posts.map((post) => (
//           <div key={post.slug} className="fashion-card">
//             <Image
//               src={post.image}
//               alt={post.title}
//               width={300}
//               height={200}
//               className="card-image"
//               unoptimized
//             />
//             <h3>{post.title}</h3>
//             <p className="card-content">{post.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // ✅ import Link
import './dashboard.css';
import defaultPosts from '../../data/fashionPosts';

export default function UserDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('fashionPosts');
    if (stored) {
      const customPosts = JSON.parse(stored);
      const combined = [...defaultPosts, ...customPosts];
      setPosts(combined);
    } else {
      setPosts(defaultPosts);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Rhythm & Threads</h1>
      <p className="subtext">Step into the universe of Tamil music – lyrics, moods, and memories.</p>

      <div className="grid-container">
        {posts.map((post) => (
          <Link href={`/user/layouts/${post.slug}`} key={post.slug} className="fashion-card">
            {/* Wrap the whole card with Link */}
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="card-image"
              unoptimized
            />
            <h3>{post.title}</h3>
            <p className="card-content">{post.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
