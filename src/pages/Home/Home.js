import styles from "./Home.module.scss";
import classNames from "classnames/bind";

import * as productServices from "~/apiServices/productServices";
import * as siteServices from "~/apiServices/siteServices";
import images from "~/assets/images";
import {
  Button,
  ServiceItem,
  Collection,
  Product,
  Carousel,
  CarouselItem,
} from "~/components";

const cx = classNames.bind(styles);

function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert();

    // let data = {
    //   _id: 2,
    //   name: "14K Gold 9″ Diamond Ankle Bracelet",
    //   price: 15.0,
    //   desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    //   size: 1,
    //   color: 3,
    // };

    // const colorData = {
    //   // _id: 3,
    //   colorName: "Bronze",
    // };

    const sizeData = {
      _id: 4,
      sizeName: "19",
    };

    let status = await siteServices.storeSize(sizeData);

    console.log("status:", status);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {/* Slider */}
      <section className={cx("slider")}>
        <div className={cx("body")}>
          <h2 className={cx("introducing")}>Introducing</h2>
          <h1 className={cx("heading")}>COLOR FANTASY</h1>
          <p className={cx("sub-heading")}>
            SOPHISTICATED COLLECTION INSPIRED BY PASSION
          </p>
          <img src={images.sliderItem} alt="" className={cx("ring-img")} />

          <div>
            <Button small hover>
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Service */}
      <div className={cx("service-wrapper", "section-1200", "mt-40")}>
        <ServiceItem
          heading="Expert Support"
          imgSrc={images.phone}
          desc="support@domain.com"
        />
        <ServiceItem
          heading="Free Delivery"
          imgSrc={images.truck}
          desc="+44 (0) 800 123 4567"
        />
        <ServiceItem
          heading="Buyer discount"
          imgSrc={images.mail}
          desc="Special Offer Every Month"
        />
        <ServiceItem
          heading="Excellent quality"
          imgSrc={images.clock}
          desc="Over 4K happy clients"
        />
      </div>

      {/* Banner 1 */}
      <div className={cx("banner-wrapper", "section-1200", "mt-40")}>
        <div className={cx("banner-item")}>
          <img src={images.banner1} alt="" className={cx("banner-img")} />
          <div className={cx("banner-body", "pos-left")}>
            <p className={cx("text")}>
              She said <br></br> "YES"
            </p>
            <a className={cx("link")} href="#">
              Shop Now
            </a>
          </div>
        </div>
        <div className={cx("banner-item")}>
          <img src={images.banner2} alt="" className={cx("banner-img")} />
          <div className={cx("banner-body", "pos-center")}>
            <p className={cx("text")}>Happy Ever After</p>
            <a className={cx("link")} href="#">
              Click here
            </a>
          </div>
        </div>
      </div>

      {/* COLLECTION */}

      <div className={cx("collection-wrapper", "section-1200", "mt-60")}>
        <Collection heading="OUR LATEST COLLECTION">
          <Product />
          <Product />
          <Product />
          <Product />
        </Collection>
      </div>

      {/* Banner 2 */}
      <div className={cx("banner-wrapper", "section-1200", "mt-40")}>
        <div className={cx("banner-item")}>
          <img src={images.banner1} alt="" className={cx("banner-img")} />
          <div className={cx("banner-body", "pos-left")}>
            <p className={cx("text")}>
              She said <br></br> "YES"
            </p>
            <a className={cx("link")} href="#">
              Shop Now
            </a>
          </div>
        </div>
        <div className={cx("banner-item")}>
          <img src={images.banner2} alt="" className={cx("banner-img")} />
          <div className={cx("banner-body", "pos-center")}>
            <p className={cx("text")}>Happy Ever After</p>
            <a className={cx("link")} href="#">
              Click here
            </a>
          </div>
        </div>
      </div>

      {/* COLLECTION */}

      <div className={cx("collection-wrapper", "section-1200", "mt-60")}>
        <Collection heading="OUR BESTSELLING ITEMS">
          <Product />
          <Product />
          <Product />
          <Product />
        </Collection>
      </div>

      {/* carousel */}

      <Carousel heading="OUR JOURNAL">
        <CarouselItem
          author="Marry Lou"
          date="August 15, 2018"
          link="Buying"
          img={images.owl1}
          heading="Choosing Sterling Silver as a Wedding Gift"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
        />

        <CarouselItem
          author="Marry Lou"
          date="August 15, 2018"
          link="Buying"
          img={images.owl2}
          heading="Choosing Sterling Silver as a Wedding Gift"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
        />

        <CarouselItem
          author="Marry Lou"
          date="August 15, 2018"
          link="Buying"
          img={images.owl3}
          heading="Choosing Sterling Silver as a Wedding Gift"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
        />

        <CarouselItem
          author="Marry Lou"
          date="August 15, 2018"
          link="Buying"
          img={images.owl2}
          heading="Choosing Sterling Silver as a Wedding Gift"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
        />

        <CarouselItem
          author="Marry Lou"
          date="August 15, 2018"
          link="Buying"
          img={images.owl1}
          heading="Choosing Sterling Silver as a Wedding Gift"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
        />

        <CarouselItem
          author="Marry Lou"
          date="August 15, 2018"
          link="Buying"
          img={images.owl1}
          heading="Choosing Sterling Silver as a Wedding Gift"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies."
        />
      </Carousel>
    </>
  );
}

export default Home;
