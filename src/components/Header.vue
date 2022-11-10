<template>
  <div class="header">
    <div class="headerLeft">
      <img src="../assets/logo.png" width="40" height="40" />
      <div>
        <h2>Vue Sneakers</h2>
        <p>Магазин лучших кроссовок</p>
      </div>
    </div>
    <div class="headerRight">
      <ul>
        <li>
          <img src="../assets/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="../assets/favorite.svg" />
        </li>
        <li>
          <img src="../assets/user.svg" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid #eaeaea;
}

.headerLeft {
  display: flex;
  align-items: center;

  img {
    margin-right: 15px;
  }

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
  }

  p {
    color: #9d9d9d;
    font-size: 14px;
  }

  h2,
  p {
    margin: 0;
  }
}

.headerRight {
  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline-flex;
      align-items: center;
      margin-left: 30px;

      &:first-of-type {
        img {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
