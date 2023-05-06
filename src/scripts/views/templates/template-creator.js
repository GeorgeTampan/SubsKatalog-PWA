import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster" src="${`${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}`}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Nama Restoran</h4>
    <p>${restaurant.name}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="resto__description">
    <h4>Menu Makanan</h4>
    ${restaurant.menus.foods.map((food) => `<div>${food.name}</div>`).join('')}
    <h4>Menu Minuman</h4>
    ${restaurant.menus.drinks.map((drink) => `<div>${drink.name}</div>`).join('')}
    <h4>description</h4>
    <p>${restaurant.description}</p>
    <h4>Customer Reviews</h4>
    ${restaurant.customerReviews.map((review) => `
        <div>
          <h5>${review.name}</h5>
          <span >${review.date}</span>
          <p>${review.review}</p>
        </div>
      `)
    .join('')}
  </div>
  </div>

`;

const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restaurant.name}"
        src="${restaurant.backdrop_path ? CONFIG.BASE_IMAGE_URL + restaurant.backdrop_path : `https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <h4>${restaurant.city}</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
