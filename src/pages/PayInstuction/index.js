import React, { useState, useEffect } from "react";
import "./index.css";
import Status from "../../components/Status";
import Instuction from "./Instuction.js";
// import Uploader from "../../components/MediaHandling/Uploader";
// import ImageViewer from "../../components/MediaHandling/ImageViewer";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import Countdown from "react-countdown";

const PayInstruction = (props) => {
  // const [payment, setPayment, paymentRef] = useState([23, 59, 59]);
  // const [time, setTime, timeRef] = useState([9, 59]);
  // const [confirmation, setConfirmation] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const orderId = localStorage.getItem("order");
  const bankName = localStorage.getItem("bank");

  let harga =
    "Rp" + new Intl.NumberFormat("id").format(localStorage.getItem("harga"));

  var nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 1);

  let tgl = nextDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  let hari = nextDate.toLocaleDateString("id", { weekday: "long" });
  let jam = nextDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let today = hari + ", " + tgl + " jam " + jam;

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  useEffect(() => {}, []);
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
    setUploaded(true);
  };

  // const renderTimer = ({ hours, minutes, seconds }) => {
  //   return (
  //     <span className="time">
  //       {hours}:{minutes}:{seconds}
  //     </span>
  //   );
  // };

  const copyTeks = (e, param) => {
    if (param === "rekening") {
      navigator.clipboard.writeText("54104257877");
      setCopied1(true);
    }
    if (param === "uang") {
      navigator.clipboard.writeText(`${localStorage.getItem("harga")}`);
      setCopied2(true);
    }
  };

  return (
    <div>
      <div className="hero-dv">
        <div style={{ display: "flex", paddingRight: "15rem" }}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          <div>
            <strong className="ps-4 fs-5">{bankName}</strong>
            <p className="ps-4 fs-7">Order ID: {orderId}</p>
          </div>
        </div>
        <div className=" pb-4">
          <Status current={["current", "current", "num"]} />
        </div>
      </div>
      <div className="ins-container">
        <div>
          <Card className="ins-item">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold fs-6">
                Selesaikan Pembayaran Sebelum
              </Card.Title>
              <div className="d-flex justify-content-between">
                <Card.Text>{today}</Card.Text>
                <Card.Text>
                  {/* <Countdown
                    date={Date.now() + 86400000}
                    renderer={renderTimer}
                  /> */}
                  {/* <div className="countdown">
                    <h6>
                      <span className="time">
                        {payment[0] < 10 ? `0${payment[0]}` : payment[0]}
                      </span>
                      <span>:</span>
                      <span className="time">
                        {payment[1] < 10 ? `0${payment[1]}` : payment[1]}
                      </span>
                      <span>:</span>
                      <span className="time">
                        {payment[2] < 10 ? `0${payment[2]}` : payment[2]}
                      </span>
                    </h6>
                  </div> */}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
          <Card className="ins-item">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold fs-6 ms-3">
                Lakukan Transfer Ke
              </Card.Title>
              <div className="d-flex">
                <div className="tmbl">
                  {bankName.substring(0, bankName.indexOf(" "))}
                </div>
                <div className="d-flex flex-column pt-4">
                  <div>{bankName}</div>
                  <div>a.n Binar Car Rental</div>
                </div>
              </div>
              <div>
                <Card.Text className="fs-6 mt-4 ms-3 mb-1">
                  Nomor Rekening
                </Card.Text>
                <div
                  style={{
                    border: "1px solid black",
                    margin: "0 1rem",
                    padding: "0.3rem",
                  }}
                >
                  <input
                    style={{ border: "none", width: "500px" }}
                    value="54104257877"
                    disabled
                  />
                  <a onClick={(e) => copyTeks(e, "rekening")}>
                    <FontAwesomeIcon icon={copied1 ? faCheck : faCopy} />
                  </a>
                </div>
              </div>
              <div>
                <Card.Text className="fs-6 mt-4 ms-3 mb-1">
                  Total Bayar
                </Card.Text>
                <div
                  style={{
                    border: "1px solid black",
                    margin: "0 1rem",
                    padding: "0.3rem",
                  }}
                >
                  <input
                    style={{ border: "none", width: "500px" }}
                    value={harga}
                    disabled
                  />
                  <a onClick={(e) => copyTeks(e, "uang")}>
                    <FontAwesomeIcon icon={copied2 ? faCheck : faCopy} />
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="ins-item">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold fs-6 ms-3 mb-3">
                Instruksi Pembayaran
              </Card.Title>
              <Instuction bank={bankName} />
            </Card.Body>
          </Card>
        </div>
        {isClicked ? (
          <Card className="ins-item coba">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <Card.Title className="fw-bold fs-6">
                  Konfirmasi Pembayaran
                </Card.Title>

                <Card.Text>
                  {/* <Countdown
                    date={Date.now() + 600000}
                    renderer={renderTimer}
                  /> */}
                  {/* <div>
                    <span className="time">
                      {time[0] < 10 ? `0${time[0]}` : time[0]}
                    </span>
                    :
                    <span className="time">
                      {time[1] < 10 ? `0${time[1]}` : time[1]}
                    </span>
                  </div> */}
                </Card.Text>
              </div>
              <Card.Text className="fs-6 mt-4">
                Terima kasih teslah melakukan konfirmasi pembayaran.
                Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit
                untuk mendapatkan konfirmasi.
              </Card.Text>
              <Card.Title className="fs-6 mt-2">
                Upload Bukti Pembayaran
              </Card.Title>
              <Card.Text className="fs-6">
                Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
                upload bukti bayarmu
              </Card.Text>
              {/* <Uploader /> */}
              <div className="up-field">
                <Dropzone
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  onSubmit={handleSubmit}
                  maxFiles={1}
                  inputContent="Drop As File"
                  accept="image/*"
                  maxSizeBytes={2 * 1024 * 1024}
                />
              </div>
              {/* <ImageViewer link={gambar}/> */}
              <div className="d-grid mt-auto">
                <Button variant="success" disabled={!uploaded}>
                  Upload
                </Button>
              </div>
            </Card.Body>
          </Card>
        ) : (
          <Card className="ins-item coba">
            <Card.Body className="d-flex flex-column">
              <Card.Text className="fs-6">
                Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
              </Card.Text>
              <div className="d-grid mt-auto">
                <Button variant="success" onClick={(e) => setIsClicked(true)}>
                  Konfirmasi Pembayaran
                </Button>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PayInstruction;
