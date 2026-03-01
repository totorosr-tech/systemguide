<template>
  <section class="home">
    <div class="home__hero">
      <p class="home__kicker">Main Page</p>
      <h2 class="home__title">실제 화면과 가이드를 분리한 기본 구조</h2>
      <p class="home__text">
        이 페이지는 실제 서비스 화면의 시작점이고, 디자인 시스템 예시는 Guide
        페이지에서 별도로 확인할 수 있습니다.
      </p>
    </div>

    <div class="home__cards">
      <article class="home__card">
        <h3 class="home__card-title">Home</h3>
        <p class="home__card-text">
          실제 기능 화면을 여기에 구현합니다.
        </p>
      </article>
      <article class="home__card">
        <h3 class="home__card-title">Guide</h3>
        <p class="home__card-text">
          버튼, 셀렉트 같은 공통 컴포넌트 가이드를 분리해서 관리합니다.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  gap: 24px;
}

.home__hero {
  padding: 32px;
  border-radius: 24px;
  background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%);
  color: #ffffff;
}

.home__kicker {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.8;
  margin-bottom: 10px;
}

.home__title {
  font-size: 32px;
  line-height: 1.15;
  margin-bottom: 12px;
}

.home__text {
  max-width: 640px;
  line-height: 1.6;
}

.home__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.home__card {
  padding: 24px;
  border: 1px solid #dbe4f0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(8px);
}

.home__card-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.home__card-text {
  color: #475569;
  line-height: 1.6;
}

@media (max-width: 767px) {
  .home__hero {
    padding: 24px;
  }

  .home__title {
    font-size: 26px;
  }

  .home__cards {
    grid-template-columns: 1fr;
  }
}
</style>
