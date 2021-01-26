// TODO: this will replace pages/index.js eventually. Keeping separate to avoid merge conflicts for now

import { Button, Heading, Text, SiteHeader } from 'components'
import styles from 'styles/full.module.css'

const Full = () => (
  <div className={`${styles.contentRoot}`}>
    <section className={styles.hero}>
      <SiteHeader />
      <div className={`${styles.sectionContent}`}>
        <div className={styles.heroContent}>
          <Heading className={styles.heroHeading}>
            We are the community for{' '}
            <span className={styles.highlight}>remote-first</span> Software
            Engineers
          </Heading>
          <Text sectionText className={styles.heroText}>
            Commit is designing the future of work and we're putting Engineers
            at the center.
          </Text>
          <Button className={styles.heroButton}>Apply to Join Us</Button>
        </div>
        <div className={styles.heroSvg}>
          <svg
            width="272"
            height="639"
            viewBox="0 0 272 639"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M256.047 0.0012207H272V68.2663H256.047C235.401 68.0679 215.494 75.752 200.578 89.677C185.663 103.602 176.92 122.664 176.219 142.791C176.219 148.753 176.219 155.55 176.219 162.228C176.219 211.235 176.219 274.671 134.778 319.386C176.525 364.101 176.342 427.537 176.219 476.604C176.219 483.222 176.219 489.721 176.219 496.041C176.92 516.168 185.663 535.23 200.578 549.155C215.494 563.08 235.401 570.764 256.047 570.566H272V638.771H256.047C217.039 638.924 179.521 624.17 151.53 597.67C123.538 571.17 107.3 535.031 106.294 496.995C106.294 490.317 106.294 483.461 106.294 476.426C106.294 413.407 103.421 370.54 61.4903 349.852L0 319.386L61.4903 288.98C103.421 268.232 106.477 225.365 106.294 162.406C106.294 155.371 106.294 148.456 106.294 141.838C107.285 103.791 123.516 67.637 151.509 41.124C179.502 14.6109 217.029 -0.151428 256.047 0.0012207Z"
              fill="url(#paint0_linear)"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="272"
                y1="319"
                x2="0"
                y2="319"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#68B5FF" />
                <stop offset="1" stopColor="#54FFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
    <section className={styles.features}>
      <div className={styles.featuresTransition} />
      <div className={styles.gridSection}>
        <div className={styles.feature}>
          <svg
            width="77"
            height="77"
            viewBox="0 0 77 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.5342 40.7353H63.6391C64.5618 43.3369 67.0464 45.2059 69.9605 45.2059C73.6581 45.2059 76.6664 42.1976 76.6664 38.5C76.6664 34.8024 73.6581 31.7941 69.9605 31.7941C67.0464 31.7941 64.5618 33.6631 63.6391 36.2647H57.5342C57.1143 32.6973 55.7029 29.4292 53.5828 26.7446L59.3503 20.9771C60.9402 21.9669 62.7514 22.4646 64.5639 22.4646C67.0907 22.4646 69.6174 21.5028 71.541 19.5793C75.3882 15.7322 75.3882 9.47232 71.541 5.62523C67.6939 1.77814 61.4342 1.77799 57.5869 5.62523C54.2835 8.9287 53.8194 14.0097 56.1891 17.8159L50.4216 23.5834C47.7372 21.4633 44.4689 20.0521 40.9015 19.632V13.5273C43.5031 12.6046 45.3721 10.12 45.3721 7.20588C45.3721 3.50826 42.3638 0.5 38.6662 0.5C34.9686 0.5 31.9603 3.50826 31.9603 7.20588C31.9603 10.12 33.8292 12.6046 36.4309 13.5273V19.6322C32.8635 20.0521 29.5952 21.4635 26.9108 23.5836L21.1436 17.8161C23.5133 14.0098 23.0493 8.92885 19.7458 5.62538C15.8987 1.77814 9.63884 1.77829 5.79175 5.62538C1.94451 9.47247 1.94451 15.7323 5.79175 19.5794C9.06109 22.8488 14.1304 23.3754 17.9824 20.9772L23.75 26.7447C21.6299 29.4293 20.2186 32.6975 19.7985 36.2649H13.6937C12.7709 33.6633 10.2863 31.7943 7.37225 31.7943C3.67463 31.7943 0.666367 34.8025 0.666367 38.5002C0.666367 42.1978 3.67463 45.206 7.37225 45.206C10.2863 45.206 12.7709 43.337 13.6937 40.7354H19.7985C20.2185 44.3028 21.6299 47.571 23.75 50.2556L17.9824 56.0228C14.1762 53.6531 9.09521 54.1173 5.79175 57.4206C1.94451 61.2677 1.94451 67.5275 5.79175 71.3746C7.71529 73.2982 10.2421 74.2599 12.7688 74.2599C15.2955 74.2599 17.8223 73.2982 19.7458 71.3746C23.0493 68.0712 23.5133 62.9902 21.1436 59.1839L26.9111 53.4164C29.5955 55.5365 32.8638 56.9477 36.4312 57.3678V63.4727C33.8295 64.3954 31.9606 66.88 31.9606 69.7941C31.9606 73.4917 34.9689 76.5 38.6665 76.5C42.3641 76.5 45.3724 73.4917 45.3724 69.7941C45.3724 66.88 43.5034 64.3954 40.9018 63.4727V57.3678C44.4692 56.9479 47.7375 55.5365 50.4219 53.4164L56.1894 59.1839C53.8197 62.9902 54.2838 68.0712 57.5872 71.3746C59.5108 73.2982 62.0376 74.2599 64.5642 74.2599C67.091 74.2599 69.6177 73.2982 71.5413 71.3746C75.3885 67.5275 75.3885 61.2677 71.5413 57.4206C68.238 54.1171 63.1568 53.6531 59.3506 56.0228L53.5831 50.2553C55.703 47.5708 57.1143 44.3027 57.5342 40.7353ZM35.3134 38.5C35.3134 36.6511 36.8175 35.1471 38.6664 35.1471C40.5153 35.1471 42.0193 36.6511 42.0193 38.5C42.0193 40.3489 40.5153 41.8529 38.6664 41.8529C36.8175 41.8529 35.3134 40.3489 35.3134 38.5ZM38.6664 46.3235C41.8307 46.3235 44.4883 48.5272 45.1896 51.4801C41.0948 53.5464 36.2397 53.5473 32.143 51.4801C32.8445 48.5272 35.5021 46.3235 38.6664 46.3235ZM69.9605 36.2647C71.193 36.2647 72.1958 37.2675 72.1958 38.5C72.1958 39.7325 71.193 40.7353 69.9605 40.7353C68.7279 40.7353 67.7252 39.7325 67.7252 38.5C67.7252 37.2675 68.7279 36.2647 69.9605 36.2647ZM60.7481 8.78638C61.8002 7.73446 63.1822 7.20842 64.5639 7.20842C65.9457 7.20842 67.3278 7.73446 68.3798 8.78638C70.4838 10.8905 70.4838 14.3141 68.3798 16.4181C66.2757 18.5221 62.8522 18.5223 60.7481 16.4181C58.6441 14.3141 58.6441 10.8905 60.7481 8.78638ZM38.6664 4.97059C39.8989 4.97059 40.9017 5.97334 40.9017 7.20588C40.9017 8.43842 39.8989 9.44118 38.6664 9.44118C37.4338 9.44118 36.4311 8.43842 36.4311 7.20588C36.4311 5.97334 37.4338 4.97059 38.6664 4.97059ZM38.6664 23.9706C46.678 23.9706 53.1958 30.4884 53.1958 38.5C53.1958 42.4831 51.5841 46.0967 48.9793 48.7241C48.0859 46.5921 46.5491 44.7955 44.6142 43.574C45.7822 42.2067 46.4899 40.435 46.4899 38.5C46.4899 34.186 42.9803 30.6765 38.6664 30.6765C34.3524 30.6765 30.8428 34.186 30.8428 38.5C30.8428 40.4349 31.5504 42.2067 32.7185 43.574C30.7837 44.7955 29.2468 46.5921 28.3535 48.7241C25.7486 46.0967 24.137 42.4831 24.137 38.5C24.137 30.4884 30.6548 23.9706 38.6664 23.9706ZM8.95275 16.4183C6.84874 14.3141 6.84874 10.8905 8.95275 8.78653C11.0569 6.68253 14.4803 6.68238 16.5845 8.78653C18.6885 10.8907 18.6885 14.3143 16.5845 16.4183C14.4805 18.5223 11.0571 18.5223 8.95275 16.4183ZM7.37225 40.7353C6.13971 40.7353 5.13695 39.7325 5.13695 38.5C5.13695 37.2675 6.13971 36.2647 7.37225 36.2647C8.60479 36.2647 9.60754 37.2675 9.60754 38.5C9.60754 39.7325 8.60479 40.7353 7.37225 40.7353ZM16.5846 68.2136C14.4805 70.3178 11.0571 70.3176 8.9529 68.2136C6.84889 66.1095 6.84889 62.6859 8.9529 60.5819C11.0571 58.4779 14.4805 58.4777 16.5846 60.5819C18.6887 62.6859 18.6887 66.1095 16.5846 68.2136ZM38.6664 72.0294C37.4338 72.0294 36.4311 71.0267 36.4311 69.7941C36.4311 68.5616 37.4338 67.5588 38.6664 67.5588C39.8989 67.5588 40.9017 68.5616 40.9017 69.7941C40.9017 71.0267 39.8989 72.0294 38.6664 72.0294ZM68.38 60.5817C70.484 62.6859 70.484 66.1095 68.38 68.2135C66.2758 70.3175 62.8524 70.3176 60.7482 68.2135C58.6442 66.1093 58.6442 62.6857 60.7482 60.5817C62.8523 58.4777 66.2757 58.4776 68.38 60.5817Z"
              fill="#FF6AB9"
            />
          </svg>
          <Heading
            variant={Heading.VARIANT.h2}
            className={styles.featureHeading}
          >
            Connect
          </Heading>
          <Text>
            Build meaningful relationships in a distributed community of
            Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <svg
            width="76"
            height="73"
            viewBox="0 0 76 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.2596 0.513851C39.1569 0.632966 39.3879 0.793633 39.7883 1.09004C41.6152 2.4474 40.9108 6.03471 37.8825 6.04302C37.7773 6.04302 37.672 6.04579 37.5697 6.04579C29.1279 6.15936 20.8585 9.51675 14.9685 15.2315C5.53865 24.3868 3.06573 39.315 9.60757 50.8913C14.2728 59.1408 23.0976 65.1547 32.8869 66.6339C45.8742 68.5952 59.8085 62.3181 66.2714 51.052C71.8486 41.3289 71.2669 28.7137 64.6023 19.4089C60.8462 14.165 55.3712 10.1068 49.0136 7.89069L48.7563 7.7882C47.9583 7.37822 47.8005 7.15384 47.5316 6.74386C46.3009 4.84632 48.3325 1.74102 51.2 2.74657C65.1869 7.66077 75.0757 20.4421 75.938 34.4119C76.6249 45.5173 71.5388 56.8139 62.5152 64.0466C52.6411 71.9609 38.3443 74.6479 25.9066 70.6977C12.9808 66.5896 2.8085 55.5008 0.50219 42.5671C-1.90642 29.0821 4.48049 14.4974 16.7282 6.65522C22.9397 2.67732 30.3906 0.51108 37.9819 0.5C38.0725 0.50554 38.166 0.508311 38.2596 0.513851ZM54.7808 18.0903C55.4122 18.1623 55.5788 18.2426 55.8945 18.4005C57.0929 19.0017 57.7389 20.4532 57.3122 21.7025C57.2596 21.8604 57.2362 21.8964 57.1689 22.046L46.4734 43.2652C46.0174 44.1073 45.7543 44.2486 45.0937 44.5727L22.7029 54.7058C21.3349 55.2737 20.952 54.9883 20.4317 54.8083C19.0403 54.3207 18.1926 52.7224 18.6603 51.3539C18.7129 51.1988 18.7334 51.1628 18.8036 51.0132L29.4991 29.7913C29.9551 28.9519 30.2153 28.8079 30.8759 28.4866L53.2696 18.3507C53.7431 18.154 54.2517 18.0626 54.7808 18.0903ZM34.3309 33.0656L27.6459 46.3262L41.6416 39.9937L48.3237 26.7303C43.6614 28.8411 38.9962 30.952 34.3309 33.0656Z"
              fill="#FF6AB9"
            />
          </svg>

          <Heading
            variant={Heading.VARIANT.h2}
            className={styles.featureHeading}
          >
            Explore
          </Heading>
          <Text>
            Build your network in a distributed community of Software Engineers
          </Text>
        </div>
        <div className={styles.feature}>
          <svg
            width="77"
            height="68"
            viewBox="0 0 77 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.1422 26.3529C36.7815 25.0439 38.7597 25.019 39.8078 26.5836C40.8573 28.1497 38.659 27.3902 37.0037 28.3809C35.3483 29.373 35.2411 33.2285 34.193 31.664C33.1448 30.0994 33.5036 27.6627 35.1422 26.3529ZM2.32309 29.1981L5.92085 30.4503L8.82374 28.0843L9.47592 31.6549L13.0947 32.848L10.1484 35.1656L10.865 38.7255L7.26726 37.4733L4.36506 39.84L3.71438 36.2696L0.0940927 35.0763L3.03967 32.7579L2.32309 29.1981ZM61.7217 2.23909L66.5177 3.90909L70.3889 0.753077L71.2573 5.5147L76.0837 7.10495L72.1547 10.1965L73.1101 14.9413L68.3148 13.2721L64.4436 16.4281L63.575 11.6679L58.7488 10.0762L62.6778 6.98469L61.7217 2.23909ZM65.6709 34.3264L67.9436 35.1159L69.7774 33.6221L70.1893 35.8783L72.475 36.631L70.6151 38.0956L71.0662 40.3442L68.7959 39.5527L66.9605 41.0479L66.55 38.7932L64.2628 38.039L66.1244 36.573L65.6709 34.3264ZM53.0431 60.2265L53.0057 65.773C52.9975 66.9487 51.9814 67.8971 50.7375 67.8893L27.507 67.7477C26.2632 67.7399 25.2597 66.7795 25.268 65.6038L25.3054 60.0573L22.6077 60.0409C21.3638 60.0331 20.3604 59.0727 20.3686 57.897L20.3745 57.0347L9.83803 56.9714C7.83744 56.9587 6.42512 55.2901 7.64011 53.6308L20.5187 35.9888L20.5593 29.8525C20.6285 19.7825 27.5461 4.19556 39.1047 1.93468C39.4513 1.86818 39.7934 1.87917 40.1146 1.95709C51.5936 4.41238 58.2704 20.0293 58.202 30.0815L58.1599 36.2191L70.7957 54.0153C71.9773 55.6774 70.5625 57.3411 68.5679 57.3289L58.0164 57.2644L58.0106 58.1267C58.0031 59.3017 56.9863 60.2494 55.7432 60.2423L53.0431 60.2265ZM29.812 60.0841L29.7883 63.5019L48.5137 63.6168L48.5382 60.1983L29.812 60.0841ZM64.6923 53.0467L58.108 43.7736L58.0462 53.0064L64.6923 53.0467ZM20.4662 43.5425L13.7559 52.7355L20.4043 52.7767L20.4662 43.5425ZM53.5194 55.9698L53.525 55.1618L53.5252 55.1075L53.6497 36.839L53.6954 30.0547C53.7496 22.1804 48.4947 8.52003 39.5418 6.20267C30.5584 8.41177 25.1192 22.0058 25.065 29.88L25.0195 36.6101L25.0199 36.6651L24.8955 54.9336L24.8896 55.7959L27.53 55.8121L27.5874 55.8123L50.8193 55.954L53.5194 55.9698ZM39.4491 19.8791C45.9608 19.9189 51.1989 24.9346 51.1569 31.0878C51.1155 37.2418 45.809 42.1927 39.298 42.1537C32.7871 42.1132 27.5489 37.099 27.5911 30.9443C27.6324 24.7903 32.9398 19.8387 39.4491 19.8791ZM39.4256 23.4433C43.8528 23.4704 47.4147 26.8796 47.3867 31.0649C47.3572 35.25 43.7496 38.6159 39.3224 38.5888C34.8944 38.5623 31.3333 35.1525 31.3628 30.9674C31.3899 26.7827 34.9984 23.4162 39.4256 23.4433Z"
              fill="#FF6AB9"
            />
          </svg>

          <Heading
            variant={Heading.VARIANT.h2}
            className={styles.featureHeading}
          >
            Elevate
          </Heading>
          <Text>
            Refine or expand your expertise through hands-on projects,
            peer-to-peer coaching & professional development opportunities
          </Text>
        </div>
      </div>
    </section>
  </div>
)

export default Full
