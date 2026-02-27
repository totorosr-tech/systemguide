# Design System Guide

## 목적
- 디자인 토큰과 컴포넌트 가이드를 통해 퍼블리싱 일관성을 유지한다.
 - 협업 시 기준을 명확히 해 UI 품질과 유지보수를 안정화한다.

## 범위
- 토큰, 컴포넌트, 레이아웃 패턴, 접근성, 퍼블리싱 규칙을 포함한다.
- 비즈니스 로직, API 스펙, 백엔드 구현은 범위 밖이다.

## 네이밍 규칙
- 클래스는 `kebab-case`를 사용한다.
- 컴포넌트 파일은 `PascalCase`를 사용한다.
- 변형은 `--modifier` 방식으로 관리한다. 예: `btn--primary`

## 토큰 가이드
- 색상, 타이포, 스페이싱, 라운드, 그림자를 SCSS 변수로 정의한다.
- 컴포넌트는 하드코딩 대신 토큰 변수를 사용한다.

## 레이아웃 규칙
- 기본 그리드는 8px 단위를 기준으로 한다.
- 섹션 간 기본 간격은 24px을 권장한다.
 
## 반응형 기준
- Mobile: 360~767px
- Tablet: 768~1279px
- Desktop: 1280px 이상

## 퍼블리싱 작업 흐름
1. 토큰 정의(SCSS 변수)
2. 베이스 레이어 구성(Reset/타이포)
3. 컴포넌트 구현(버튼부터 시작)
4. 가이드 페이지로 사용법 확인

## 폴더 구조
```
/src
  /assets
  /styles
    _tokens.scss
    _mixins.scss
    _reset.scss
    _typography.scss
    index.scss
  /components
    /button
      Button.vue
      button.scss
      README.md
  /views
    Guide.vue
  App.vue
  main.js
/docs
  README.md
```

## 버튼 가이드

### 종류
- Primary
- Secondary
- Outline

### 상태
- Default
- Hover
- Disabled

### 규칙
- 최소 높이: 40px
- 라운드: 8px
- 폰트: 14px / 600

### 접근성 규칙
- 버튼 텍스트 대비는 최소 4.5:1 기준을 유지한다.
- 아이콘만 있는 버튼은 `aria-label`로 의미를 제공한다.
- 비활성 상태는 `disabled` 속성을 사용하고 키보드 포커스를 받지 않도록 한다.
- 포커스 스타일을 제거하지 않는다. 필요 시 `:focus-visible`로 명확한 표시를 유지한다.

### 사용 예시
```vue
<Button variant="primary">확인</Button>
<Button variant="secondary">저장</Button>
<Button variant="outline">취소</Button>
<Button variant="primary" :disabled="true">비활성</Button>
```
