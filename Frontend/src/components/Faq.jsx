import "./Faq.css";

function Faq() {
  return (
    <>
      <div className="freq-div m-4 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What sports are available for students to join?
            </div>
            <div className="collapse-content">
              <p>
                We offer a variety of sports including basketball, football,
                cricket, volleyball, badminton, and athletics. You can find more
                information about each sport in the sports section of the
                website.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How can I register for a sport?
            </div>
            <div className="collapse-content">
              <p>
                You can register by visiting the registration page on the
                website. Fill out the form with your personal details and select
                the sport you would like to participate in. Registration
                deadlines will be communicated via email or notifications on the
                website.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Are there any eligibility criteria to join the sports teams?
            </div>
            <div className="collapse-content">
              <p>
                Yes, each sport has different eligibility criteria. Generally,
                students need to maintain a good academic record and demonstrate
                skills in the sport. Trials are conducted to assess performance
                before confirming team members.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              What equipment do I need to bring for the sports activities?
            </div>
            <div className="collapse-content">
              <p>
                For most sports, the college provides basic equipment. However,
                students are encouraged to bring their own gear, such as shoes,
                rackets, or protective gear, depending on the sport. Specific
                requirements will be mentioned in the guidelines for each sport.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Can I participate in more than one sport?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can participate in multiple sports as long as the
                schedules do not conflict. Be mindful of your time management to
                ensure you can attend practices and matches for each sport.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How are sports teams selected?
            </div>
            <div className="collapse-content">
              <p>
                Sports teams are selected through trials where students showcase
                their skills. The selection panel consists of coaches and senior
                players who evaluate performance based on specific criteria for
                each sport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq
