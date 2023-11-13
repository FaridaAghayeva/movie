import React from 'react'
import style from './assets/style.module.css'
import {RxTriangleRight} from 'react-icons/rx'
export default function Main() {
  return (
    <body>
      <div className={style.container}>
        <div className={style.posterContainer}>
          <div className={style.containerDiv1}>
            <h1>30</h1>
            <h2>NOV. 2017</h2>
          </div>
          <img
            className={style.poster}
            src="https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg"
          />
          <div class={style.triangle}>
            <RxTriangleRight className={style.triangleRight} />
          </div>
          <div class={style.triangleResp}>
            <RxTriangleRight className={style.triangleRightResp} />
          </div>
        </div>
        <div className={style.details}>
          <h1>MOONLIGHT</h1>
          <h2 className={style.lang}>English/ 2020/American </h2>
          <h2>THE CAST </h2>
          <div className={style.castContainer}>
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
            <img className={style.cast} src="/images/moon.jpg" />
          </div>
          <h2>SYNOPSIS</h2>
          <p className={style.synopsis}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aliquid sapiente iusto numquam laudantium ducimus
            voluptatem, recusandae corporis, perferendis assumenda est alias
            possimus molestiae repudiandae doloremque culpa, tempore at?
            Voluptates!
          </p>
          <div>
            <h2>VIDEO/PICTURES</h2>
            <img
              className={style.videosPictures}
              src="/images/Supermoon-2012.jpg"
            />
            <img
              className={style.videosPictures}
              src="/images/Supermoon-2012.jpg"
            />
            <img
              className={style.videosPictures}
              src="/images/Supermoon-2012.jpg"
            />
            <img
              className={style.videosPictures}
              src="/images/Supermoon-2012.jpg"
            />
            <img
              className={style.videosPictures}
              src="/images/Supermoon-2012.jpg"
            />
            <img
              className={style.videosPictures}
              src="/images/Supermoon-2012.jpg"
            />
            <img
              className={style.videosPictures}
              src="/images/Supermoon-2012.jpg"
            />
          </div>
        </div>
      </div>
    </body>
  )
}
