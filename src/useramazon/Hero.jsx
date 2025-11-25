import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
function Hero() {
  return (
    <section className="bg-black p-1">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
              className="d-block w-100  img-fluid"
              alt="Slide 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
              className="d-block w-100 img-fluid"
              alt="Slide 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
              className="d-block w-100 img-fluid"
              alt="Slide 3"
            />
          </div>


        </div>




        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>


      </div>
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold text-white">Trending Products</h2>

        <div className="row g-4">


          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Revamp your home in style</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Layers._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/India_Inspired._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Bohemian-styling-REVISED._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Status._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Appliances for your home</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/31bz5A-34KL._SR240,220_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/31h1KeIto8L._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/41z7nDJEy4L._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/51yW87aqMQL._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">HeadPhones starting @149</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/1-Boat._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/7-Noise._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/5-Boult._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/16-Zebronics._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Starting @899 |Amazon Brands</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/91BAZAi70CL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/71HY+ebyX9L._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/71VJI9YScVL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="row g-4 mt-5">


          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Revamp your home in style</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Layers._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/India_Inspired._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Bohemian-styling-REVISED._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Status._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Appliances for your home</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/31bz5A-34KL._SR240,220_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/31h1KeIto8L._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/41z7nDJEy4L._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/51yW87aqMQL._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">HeadPhones starting @149</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/1-Boat._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/7-Noise._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/5-Boult._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/16-Zebronics._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Starting @899 |Amazon Brands</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/91BAZAi70CL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/71HY+ebyX9L._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/71VJI9YScVL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="amazonViewedCarousel" className="carousel slide w-100 bg-white" data-bs-ride="carousel">

        <h4 className="px-3 pt-3">Items you have viewed</h4>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="container-fluid py-3">
              <div className="row justify-content-between g-3">

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61sc5UfJIZL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61MwxbBTeAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61tp2CWJyBL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61NU0pPGF+L._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/616eGfn0phL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/51eBROSaUAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/512bGzS1wEL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container-fluid py-3">
              <div className="row justify-content-between g-3">

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61sc5UfJIZL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61MwxbBTeAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61tp2CWJyBL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61NU0pPGF+L._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/616eGfn0phL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/51eBROSaUAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/512bGzS1wEL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

              </div>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#amazonViewedCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#amazonViewedCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>



      <div id="amazonMoreItemsCarousel" className="carousel slide w-100 bg-white mt-4" data-bs-ride="carousel">

        <h4 className="px-3 pt-3">More items to consider</h4>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="container-fluid py-3">
              <div className="row justify-content-between g-3">

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61sc5UfJIZL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61MwxbBTeAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61tp2CWJyBL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61NU0pPGF+L._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/616eGfn0phL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/51eBROSaUAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/512bGzS1wEL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container-fluid py-3">
              <div className="row justify-content-between g-3">

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61sc5UfJIZL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61MwxbBTeAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61tp2CWJyBL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/61NU0pPGF+L._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/616eGfn0phL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/51eBROSaUAL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

                <div className="col-6 col-sm-3 col-lg-1">
                  <img src="https://m.media-amazon.com/images/I/512bGzS1wEL._AC_UL480_FMwebp_QL65_.jpg" className="img-fluid rounded" />
                </div>

              </div>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#amazonMoreItemsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#amazonMoreItemsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      <div className="container my-5">


        <div className="row g-4">


          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Revamp your home in style</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Layers._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/India_Inspired._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Bohemian-styling-REVISED._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Status._SS400_QL85_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Appliances for your home</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/31bz5A-34KL._SR240,220_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/31h1KeIto8L._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/41z7nDJEy4L._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/51yW87aqMQL._SR480,440_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">HeadPhones starting @149</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/1-Boat._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/7-Noise._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/5-Boult._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/G/31/img24/BAUheadphone/16-Zebronics._CB543806970_.png" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>



          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 p-3">
              <h4 className=" mb-4 fw-bold">Starting @899 |Amazon Brands</h4>
              <div className="row g-3">

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/91BAZAi70CL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/71HY+ebyX9L._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card">
                    <img src="https://m.media-amazon.com/images/I/71VJI9YScVL._AC_UL480_FMwebp_QL65_.jpg" className="card-img-top" />
                    <div className="card-body p-2">
                      <p className="card-text small">Short description</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>



      <div id="productCarousel" className="carousel slide  bg-white" data-bs-ride="false">
        <h5 className='fw-bold '>Inspired by Your browsing history</h5>
        <hr />
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-2">
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/Layers._SS400_QL85_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Lukzer 2 Seater Green Leaves Universal Sofa Cover | 360° Fully Covered Anti-Slip Washable........</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://m.media-amazon.com/images/I/51ZiROH9i6L._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Xtrim Puzzle Exercise Mat High-Density EVA Foam Mat, Interlocking Tiles, Shock Proof, ..........</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://m.media-amazon.com/images/I/21o88VcjQ7L._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Boldfit Yoga Mat for Women & Men - TPE Eco Friendly 6mm thickness Non Slip Classic Pro Exercise Mat for .....</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://m.media-amazon.com/images/I/41UIxg3-XPL._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Nermosa Women Printed Anarkali Kurta and Pant Set with Dupatta</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://m.media-amazon.com/images/I/319WYcef6JL._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Boldfit Blaze Football Practise Foot Ball Training Football Size 5 Original for All Ages Group Rubber ......</h6>
                    <div className="card-body  p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://m.media-amazon.com/images/I/31AopMCvXPL._SR480,440_AC_.jpg" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Kore PVC 10KG Combo 3 Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Bag and Gym....</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="carousel-item ">
            <div className="d-flex justify-content-center gap-2">

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Product One</h6>
                    <div className="card-bodyp-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center">
                    <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center p-0 m-0">
                    <h6 className="card-title text-primary">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0" >
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center">
                    <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-6 col-sm-3 col-lg-2">
                <div className="card border-0">
                  <img src="https://via.placeholder.com/150" className="card-img-top" style={{
                    height: "300px",
                    width: "100%",
                    objectFit: "contain"
                  }} />
                  <div className="card-body text-center">
                    <h6 className="card-title text-primary p-0 m-0">Product One</h6>
                    <div className="card-body p-0 m-0">
                      <p className="card-text small text-danger">Rs:885</p>
                      <p className="card-text small text-black">Free delivery by 23-oct</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        <button className="carousel-control-prev  " type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon "></span>
        </button>

        <button className="carousel-control-next " type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>


    </section>





  )
}
export default Hero