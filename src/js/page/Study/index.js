import React from "react";
import TopicList from "../component/Study/TopicList";
import Lesson from "../component/Study/Chapter/Lesson";
import Chapter from "../component/Study/Chapter";
import img_preview from "../../assets/6.png";
import "./style.css";

const will_learn = [
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
  "Nắm chắc lý thuyết chung trong việc xây dựng web",
];

function handleClick_img() {
  return (
    <iframe
      width="420"
      height="345"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
    ></iframe>
  );
}

export default function Study() {
  return (
    <section className="container d-flex flex-row py-5">
      <section className="col-9 mx-3">
        <div className="content_1">
          <h1> Node & ExpressJS</h1>
          <div className="course_description">
            Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi
            làm Back-end và xây dựng RESTful API cho trang web.
          </div>
          <div className="topic_will_learn py-5">
            <h3 className="pb-3">Bạn sẽ học được những gì ?</h3>

            <TopicList props={will_learn} />
          </div>

          <div className="course_content">
            <h3 className="pb-3"> Nội dung khóa học</h3>
            <Chapter />
          </div>
          <div className="topic_request py-5">
            <h3 className="pb-3">Yêu cầu</h3>

            <TopicList props={will_learn} />
          </div>
        </div>
      </section>
      <section className="col-3 mx-3 d-flex flex-column">
        <div className="content_2 d-flex flex-column ">
          <div className="preview mb-3">
            <input
              type="image"
              src={img_preview}
              className="img_preview"
              onClick={handleClick_img}
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#fff"
              class="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
            <a href="https://www.youtube.com/watch?v=z2f7RHgvddc&list=PL_-VfJajZj0VatBpaXkEHK_UPHL7dW6I3">
              Xem giới thiệu khóa học
            </a>
          </div>
          <h5>Miễn phí</h5>
          <button>ĐĂNG KÝ HỌC</button>
          <ul className="more_detail">
            <li>Trình độ cơ bản</li>
            <li>
              Tổng số <strong>39 bài học</strong>
            </li>
            <li>
              Thời lượng <strong>12 giờ 11 phút</strong>
            </li>
            <li>Học mọi lúc mọi nơi</li>
          </ul>
        </div>
      </section>
    </section>
  );
}
