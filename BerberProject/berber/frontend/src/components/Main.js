import homePage from "../assets/images/hero.png";
import aboutImg from "../assets/images/about.jpg";
import hair1 from "../assets/images/service-1.jpg";
import hair2 from "../assets/images/service-2.jpg";
import hair3 from "../assets/images/service-3.jpg";

const Main = () => {
  return (
    <div className='main'>
      <section id="home" className='home-page'>
        <div className="container">
          <div className="home-page-detail">
            <h2>Türkiyenin en iyi erkek kuaförü</h2>  
            <p>
              Hizmette sınır yok, güler yüzlü çalışanlar ve çok iyi hizmetler ile 
              Berber<span>X </span> sizlerle birlikte.
            </p>
          </div>
          <img src={homePage} alt="" />
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-detail">
              <h2>Hakkımızda</h2>
              <h4>12 yıllık deneyim</h4>
              <div className="about-paragraf">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.</p>              
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.</p>              
              </div>
            </div>
        </div>
      </section>
      <section className="prices" id="prices">
        <div className="container">
          <div className="prices-header">
            <h2>Prices</h2>
            <h4>Sizin İçin En İyi Kuaför ve Berber Hizmetleri</h4>
          </div>
          <div className="prices-boxes">
            <div className="prices-box">
              <div className="prices-img">
                <img src={hair1} alt="" />
              </div>

              <div className="prices-detail">
                <div className="prices-detail-header">
                  Saç Kesimi
                </div>
                <div className="prices-paragraf">
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </div>
                <div className="price">120TL</div>
              </div>
            </div>
            <div className="prices-box">
              <div className="prices-img">
                <img src={hair2} alt="" />
              </div>

              <div className="prices-detail">
                <div className="prices-detail-header">
                  Sakal Kesimi
                </div>
                <div className="prices-paragraf">
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </div>
                <div className="price">80TL</div>
              </div>
            </div>
            <div className="prices-box">
              <div className="prices-img">
                <img src={hair3} alt="" />
              </div>

              <div className="prices-detail">
                <div className="prices-detail-header">
                  Boyama ve Yikama
                </div>
                <div className="prices-paragraf">
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                </div>
                <div className="price">140TL</div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default Main