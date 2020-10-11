<template>
  <div class="the-home-box">
    <v-parallax height="800" :src="require('@/assets/home/homebg.webp')">
      <span class="intro"
        >Trade with your <br />
        customized <br />
        Algorithm with Chiron <br />
        Capital</span
      >
      <span class="intro2">
        Easy & Cheap, First Customized Algorithmic Trading Analytic Platform for
        Retail Users
      </span>
      <a
        href="mailto:ChironCapital@hotmail.com"
        target="_self"
        data-content="ChironCapital@hotmail.com"
        data-type="mail"
        class="gocontact"
      >
        <span>Get in Touch</span>
      </a>
    </v-parallax>
    <div class="section2">
      <h4 class="titletext">Algorithms</h4>
      <h5 class="subtitletext">
        Customized Algorithm Strategies for Retail Investors, fitting to your
        financial position and market view
      </h5>

      <ul class="ul-list">
        <li class="ul-list-item">
          <span>Easy, trendy and high-tech algos</span>
        </li>
        <li class="ul-list-item">
          <span>Equity, FX and Cryptocurrency</span>
        </li>
        <li class="ul-list-item">
          <span>Customized to your positions and market views</span>
        </li>
        <li class="ul-list-item">
          <span>Easy use of algo training based on your customization</span>
        </li>
        <li class="ul-list-item">
          <span>User-friendly visualisation of algo performance</span>
        </li>
      </ul>

      <div class="imgs">
        <div :key="idx" v-for="(item, idx) in imgitems" class="img-item">
          <img :src="item.imgsrc" alt="" class="img" />
          <div class="imgintro">{{ item.desp }}</div>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="about-intro">
        <div class="about-title">
          About Us
        </div>
        <div class="about-subtitle">
          Algorithmic Trading Strategy Analytic Platform
        </div>
        <div class="about-desp">
          Chiron Capital assists retail investors with customized algorithmic
          analytic into the huge untapped market with a recipe to success. Our
          methods have been tried and tested by major expert analysts and
          investment bankers, approving our successful formula. With
          professional background credibility, Chiron Capital is here to ensure
          that your financial present and future are on the path to success.
        </div>
      </div>
      <div class="img-area">
        <img :src="require('@/assets/home/about.webp')" alt="" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageDashboard',
  data() {
    return {
      imgitems: [
        {
          imgsrc: require('@/assets/home/1.webp'),
          desp: 'Low Risk Strategies'
        },
        {
          imgsrc: require('@/assets/home/2.webp'),
          desp: 'High Return Strategies'
        },
        {
          imgsrc: require('@/assets/home/3.webp'),
          desp: 'Advanced Trading Strategies'
        },
        {
          imgsrc: require('@/assets/home/4.webp'),
          desp: 'CryptoCurrency Trading Strategies'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.the-home-box {
  background-color: #3c141b;
  .intro {
    font-weight: bold;
    color: #dfb6c5;
    font-size: 72px;
    text-align: center;
  }
  .intro2 {
    color: #3c141c;
    font: normal normal normal 20px/1.67em lato-light, lato, sans-serif;
    text-align: center;
  }

  .gocontact {
    margin: 60px auto 0 auto;
    font-size: 15px;
    transition: all 0.4s ease 0s;
    color: #3c141c;
    position: relative;
    white-space: nowrap;
    width: 120px;
    height: 45px;
    background-color: #dfb6c5;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }

  ::v-deep .v-parallax {
    background-color: white;
    .v-parallax__image-container {
      opacity: 0.5;
    }
  }

  .section2 {
    margin-top: 40px;
    .titletext {
      color: #dfb6c5;
      font-size: 40px;
      text-align: center;
    }
    .subtitletext {
      color: #ffffff;
      font-size: 18px;
      text-align: center;
    }

    .ul-list {
      margin-top: 40px;
      &-item {
        font-size: 15px;
        color: white;
        text-align: center;

        list-style-position: inside;
      }
    }

    .imgs {
      margin: 120px auto 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 980px;
      .img-item {
        width: 460px;
        height: 500px;
        .img {
          width: 460px;
          height: 350px;
          object-fit: cover;
        }
        .imgintro {
          margin-top: 60px;
          color: #dfb6c5;
          font-size: 22px;
          font-weight: bold;
        }
      }
    }
  }

  .about {
    height: 780px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #62202e;
    .about-intro {
      width: 520px;
      height: 320px;
      margin-right: 60px;
      .about-title {
        font-size: 40px;
        color: #dfb6c5;
      }
      .about-subtitle {
        font-size: 18px;
        color: white;
      }
      .about-desp {
        margin-top: 20px;
        font-size: 15px;
        color: white;
      }
    }
    .img-area {
      background-color: white;
      width: 460px;
      height: 540px;
      overflow: visible;
      position: relative;
      .img {
        position: absolute;
        height: 100%;
        width: 100%;
        left: -20px;
        top: -20px;
      }
    }
  }
}
</style>
