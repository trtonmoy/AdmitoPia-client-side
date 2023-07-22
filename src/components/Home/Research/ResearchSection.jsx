import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const ResearchSection = () => {
  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold text-orange-600 bg-orange-50 rounded-b-lg mb-12 py-2 mx-8 mt-8 text-center">
        Researches Of Our Students
      </h3>
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <h3> Title : Exploring Artificial Intelligence</h3>
              <div className="p-12 md:flex md:justify-between md:items-center gap-10">
                <figure>
                  <img
                    src="https://img.freepik.com/premium-photo/exploring-artificial-intelligence-ethical-implications-generative-ai_100209-4189.jpg"
                    alt="A brief introduction to AI"
                  />
                  <figcaption>
                    Welcome to the fascinating world of Artificial Intelligence!
                    As we embark on this exciting journey, we will uncover the
                    wonders of AI and its impact on our lives. Join us as we
                    explore the possibilities and discover the future together.
                  </figcaption>
                </figure>
                <div>
                  <h4>Key Features</h4>
                  <ul>
                    <li>
                      - AI in Everyday Life: From virtual assistants to
                      personalized recommendations, AI enriches our daily
                      experiences in ways we could not imagine before.
                    </li>
                    <li>
                      - Advancements & Innovations: Witness the groundbreaking
                      progress in AI research, as technology reaches new
                      heights, shaping industries worldwide.
                    </li>
                    <li>
                      - Ethical Considerations: Delve into discussions about
                      responsible AI development, ensuring its use aligns with
                      our shared values.
                    </li>
                    <li>
                      - Future Discoveries: Unravel the mysteries of AI s
                      untapped potential, paving the way for a brighter, more
                      interconnected world.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <h3> Title : Exploring Artificial Intelligence</h3>
              <div className="p-12 md:flex md:justify-between md:items-center gap-10">
                <figure>
                  <img
                    src="https://img.freepik.com/premium-photo/exploring-artificial-intelligence-ethical-implications-generative-ai_100209-4189.jpg"
                    alt="A brief introduction to AI"
                  />
                  <figcaption>
                    Welcome to the fascinating world of Artificial Intelligence!
                    As we embark on this exciting journey, we will uncover the
                    wonders of AI and its impact on our lives. Join us as we
                    explore the possibilities and discover the future together.
                  </figcaption>
                </figure>
                <div>
                  <h4>Key Features</h4>
                  <ul>
                    <li>
                      - AI in Everyday Life: From virtual assistants to
                      personalized recommendations, AI enriches our daily
                      experiences in ways we could not imagine before.
                    </li>
                    <li>
                      - Advancements & Innovations: Witness the groundbreaking
                      progress in AI research, as technology reaches new
                      heights, shaping industries worldwide.
                    </li>
                    <li>
                      - Ethical Considerations: Delve into discussions about
                      responsible AI development, ensuring its use aligns with
                      our shared values.
                    </li>
                    <li>
                      - Future Discoveries: Unravel the mysteries of AI s
                      untapped potential, paving the way for a brighter, more
                      interconnected world.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <h3> Title : Exploring Artificial Intelligence</h3>
              <div className="p-12 md:flex md:justify-between md:items-center gap-10">
                <figure>
                  <img
                    src="https://img.freepik.com/premium-photo/exploring-artificial-intelligence-ethical-implications-generative-ai_100209-4189.jpg"
                    alt="A brief introduction to AI"
                  />
                  <figcaption>
                    Welcome to the fascinating world of Artificial Intelligence!
                    As we embark on this exciting journey, we will uncover the
                    wonders of AI and its impact on our lives. Join us as we
                    explore the possibilities and discover the future together.
                  </figcaption>
                </figure>
                <div>
                  <h4>Key Features</h4>
                  <ul>
                    <li>
                      - AI in Everyday Life: From virtual assistants to
                      personalized recommendations, AI enriches our daily
                      experiences in ways we could not imagine before.
                    </li>
                    <li>
                      - Advancements & Innovations: Witness the groundbreaking
                      progress in AI research, as technology reaches new
                      heights, shaping industries worldwide.
                    </li>
                    <li>
                      - Ethical Considerations: Delve into discussions about
                      responsible AI development, ensuring its use aligns with
                      our shared values.
                    </li>
                    <li>
                      - Future Discoveries: Unravel the mysteries of AIs
                      untapped potential, paving the way for a brighter, more
                      interconnected world.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <h3> Title : Exploring Artificial Intelligence</h3>
              <div className="p-12 md:flex md:justify-between md:items-center gap-10">
                <figure>
                  <img
                    src="https://img.freepik.com/premium-photo/exploring-artificial-intelligence-ethical-implications-generative-ai_100209-4189.jpg"
                    alt="A brief introduction to AI"
                  />
                  <figcaption>
                    Welcome to the fascinating world of Artificial Intelligence!
                    As we embark on this exciting journey, we will uncover the
                    wonders of AI and its impact on our lives. Join us as we
                    explore the possibilities and discover the future together.
                  </figcaption>
                </figure>
                <div>
                  <h4>Key Features</h4>
                  <ul>
                    <li>
                      - AI in Everyday Life: From virtual assistants to
                      personalized recommendations, AI enriches our daily
                      experiences in ways we could not imagine before.
                    </li>
                    <li>
                      - Advancements & Innovations: Witness the groundbreaking
                      progress in AI research, as technology reaches new
                      heights, shaping industries worldwide.
                    </li>
                    <li>
                      - Ethical Considerations: Delve into discussions about
                      responsible AI development, ensuring its use aligns with
                      our shared values.
                    </li>
                    <li>
                      - Future Discoveries: Unravel the mysteries of AI s
                      untapped potential, paving the way for a brighter, more
                      interconnected world.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ResearchSection;
