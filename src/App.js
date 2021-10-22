import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
    name: "kimchi",
    image: "https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg",
  },
  {
    name: "ramen",
    image: "https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df64d239a3ca63c5a7574a4ad2656633c8c",
  },
  {
    name: "samgyeopsal",
    image: "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
  },
  {
    name: "chukumi",
    image: "https://static.wtable.co.kr/image/production/service/recipe/707/d403b168-c865-4b5e-9afb-58c48e5feaec.jpg",
  },
  {
    name: "gimbap",
    image: "https://static.wtable.co.kr/image-resize/production/service/recipe/689/4x3/edd1e01f-4502-453b-8b61-688941aefb76.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
