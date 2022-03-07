import React from "react";

import {
  DashboardHomeWrapper,
  HomeCard,
  Overlay,
  Button,
  Card,
} from "./dashboardhome.styles";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import DashboardTab from "./index.jsx";

const DashboardHome = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <DashboardTab>
      {/* {showModal && (
        <Overlay>
          <ModalCard showModal setShowModal={setShowModal} />
        </Overlay>
      )} */}
      <DashboardHomeWrapper>
        <DashBoardHomeCard />
      </DashboardHomeWrapper>
    </DashboardTab>
  );
};
export default DashboardHome;

const LogoSize = 100;
export const DashBoardHomeCard = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalCardData, setModalCardData] = React.useState("");

  const [cardData, setCardData] = React.useState("");

  // React.useEffect(() => {
  //   fetch("/src/data.json")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response, "response");
  //       setCardData(response);
  //     });
  // }, []);

  return (
    <React.Fragment>
      {showModal && (
        <Overlay>
          <ModalCard
            showModal={showModal}
            setShowModal={setShowModal}
            modalCardData={modalCardData}
          />
        </Overlay>
      )}
      {data?.map((details) => {
        return (
          <HomeCard key={details.id}>
            <header>
              <div className="logo_text">{details.bankName}</div>
              <div className="logo_holder">
                <div className="logo">
                  {/* <Image
                    src={details.img}
                    alt="logo"
                    width={LogoSize}
                    height={LogoSize}
                  /> */}
                </div>
              </div>
            </header>
            <main>
              <div>{details.text}</div>
            </main>
            <footer>
              <div className="analytics">
                <div className="analytics_container">
                  <div className="analytics_title">Sector</div>
                  <div className="analytics_content">{details.sector}</div>
                </div>

                <div className="analytics_container">
                  <div className="analytics_title">Number of shares </div>
                  <div className="analytics_content">
                    {details.numberOfShares}
                  </div>
                </div>
              </div>

              <div className="analytics">
                <div className="analytics_container">
                  <div className="analytics_title">Price per share</div>
                  <div className="analytics_content bold">${details.price}</div>
                </div>

                <div className="analytics_container">
                  <div className="analytics_title">Click for more details</div>
                  <div
                    className="analytics_content bold"
                    onClick={() => {
                      setModalCardData(details);
                      setShowModal(!showModal);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    More +
                  </div>
                </div>
              </div>
              <div
                className={`like ${details.heartBtn}`}
                heartBtn={details.heartBtn}
              >
                <AiFillHeart />
              </div>
            </footer>
          </HomeCard>
        );
      })}
    </React.Fragment>
  );
};

const ModalCard = ({ modalCardData, showModal, setShowModal }) => {
  console.log(modalCardData, "modal");
  return (
    <Card>
      <header>
        <div className="logo_holder">
          <div className="logo">
            {/* <Image src={modalCardData.img} alt="logo" width={30} height={30} /> */}
          </div>
          <div className="logo_text">{modalCardData.bankName}</div>
        </div>
        <div className="button">
          <div className="minimize">
            <AiOutlineMinusCircle onClick={() => setShowModal(!showModal)} />
          </div>
          <div className="close">
            <IoCloseCircleOutline onClick={() => setShowModal(!showModal)} />
          </div>
        </div>
      </header>
      <main>
        <div className="title">
          {/* <div className="title_heading">{modalCardData.bankFullName}</div> */}
          <div className="title_content">Fintech</div>
        </div>

        <div className="analytics">
          <div className="">
            <div className="analytics_title">Sector</div>
            {/* <div className="analytics_content">{modalCardData.sector}</div> */}
          </div>
          <div className="total">
            <div className="analytics_title">Total shares available</div>
            <div className="analytics_content">
              {modalCardData.numberOfShares}
            </div>
          </div>
          <div className="">
            <div className="analytics_title">Price per share</div>
            {/* <div className="analytics_content">${modalCardData.price}</div> */}
          </div>
        </div>

        <div className="info">
          <div className="info_heading">Important Info</div>
          {/* <div className="info_content">{modalCardData.text}</div> */}
        </div>

        <div className="web_company">
          <div className="">
            <div className="web_company_title">Website</div>
            {/* <div className="web_company_content">{modalCardData.website}</div> */}
          </div>
          <div className="">
            <div className="web_company_title">Company Number</div>
            <div className="web_company_content">
              {/* {modalCardData.companyNumber} */}
            </div>
          </div>
        </div>

        <div className="shares">
          <div className="">
            <div className="shares_title">Number of share you want to buy</div>
            <div className="shares_content">135</div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <Button type="primary">Buy</Button>
        <div className="add_to_cart">
          <Button>Add to cart</Button>
        </div>
        <Button>Negotiate</Button>
      </footer>
    </Card>
  );
};

const data = [
  {
    id: 0,
    price: 80,
    heartBtn: true,
    sector: "Fintech",
    bankName: "monzo bank",
    numberOfShares: 500,
    website: "monzobank.com",
    img: "/assets/monzo.png",
    companyNumber: "0800 802 1281",
    bankFullName: "monzo bank limited",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae id iusto dolore, quas inventore, soluta assumenda doloribus maiores.",
  },
  {
    id: 0,
    price: "100",
    heartBtn: false,
    sector: "Fintech",
    numberOfShares: "700",
    bankName: "Kuda bank",
    website: "kudabank.com",
    img: "/assets/kuda.jpeg",
    companyNumber: "0800 802 1281",
    bankFullName: "kuda bank limited",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae id iusto dolore, quas inventore, soluta assumenda doloribus maiores.",
  },
  {
    id: 0,
    price: "60",
    heartBtn: false,
    sector: "Fintech",
    bankName: "piggyvest",
    numberOfShares: "400",
    website: "piggyvestbank.com",
    img: "/assets/piggyvest.png",
    companyNumber: "0800 808 1281",
    bankFullName: "piggyvest  limited",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae id iusto dolore, quas inventore, soluta assumenda doloribus maiores.",
  },
  {
    id: 0,
    price: "30",
    heartBtn: true,
    sector: "Fintech",
    bankName: "gimet bank",
    numberOfShares: "1000",
    website: "gimetbank.com",
    img: "/assets/gimet.png",
    companyNumber: "0800 842 1281",
    bankFullName: "gimet bank limited",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae id iusto dolore, quas inventore, soluta assumenda doloribus maiores.",
  },
  {
    id: 0,
    price: "400",
    heartBtn: false,
    numberOfShares: "900",
    sector: "Entertainment",
    website: "rebelclub.com",
    img: "/assets/rebel.png",
    bankName: "Rebel Book Club",
    companyNumber: "0800 802 0000",
    bankFullName: "rebel book club",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae id iusto dolore, quas inventore, soluta assumenda doloribus maiores.",
  },
  {
    price: "73",
    img: "/assets/cashmere.png",
    bankName: "cashmere bank",
    website: "cashmerebank.com",
    id: 0,
    heartBtn: true,
    companyNumber: "0800 802 1222",
    sector: "Fintech",
    numberOfShares: "400",
    bankFullName: "cashmere bank limited",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae id iusto dolore, quas inventore, soluta assumenda doloribus maiores.",
  },
];
