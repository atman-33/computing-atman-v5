type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="175.7 78 490.6 436.9" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#61dafb">
        <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
        <circle cx="420.9" cy="296.5" r="45.7" />
      </g>
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),

  search: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" />
    </svg>
  ),

  question: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95044 3.35288C10.9563 2.88237 13.0437 2.88238 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z"
        stroke="#0095FF"
        strokeWidth="1.5"
      />
      <path
        d="M8.95046 20.6471C10.9563 21.1176 13.0438 21.1176 15.0496 20.6471C17.827 19.9956 19.9957 17.827 20.6472 15.0496C21.1177 13.0437 21.1177 10.9563 20.6472 8.95043C19.9957 6.17301 17.827 4.00437 15.0496 3.35288C13.0438 2.88237 10.9563 2.88237 8.95046 3.35288C6.17304 4.00437 4.0044 6.17301 3.35291 8.95043"
        stroke="#363853"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.5" r="1" fill="#0095FF" />
      <path
        d="M10 10V9.5C10 8.39543 10.8954 7.5 12 7.5V7.5V7.5C13.1046 7.5 14 8.39543 14 9.5V9.62132C14 10.1839 13.7765 10.7235 13.3787 11.1213L12 12.5"
        stroke="#0095FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  update: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Refresh">
        <path
          style={{ fill: '#8c9eff' }}
          d="M16.92,5.38a1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-2-2a1,1,0,0,0-1.42,1.42l.34.33C8.26,4.45,4,9.65,4,16c0,5.94,3.8,11,8.84,11.88H13a1,1,0,0,0,.16-2C9.08,25.23,6,21,6,16c0-5.2,3.32-9.48,7.54-9.95l-.25.24a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2A1,1,0,0,0,16.92,5.38Z"
        />

        <path
          style={{ fill: '#5f7cf9' }}
          d="M28,16c0-5.94-3.8-11-8.84-11.88a1,1,0,1,0-.32,2C22.92,6.77,26,11,26,16c0,5.2-3.32,9.48-7.54,10l.25-.24a1,1,0,0,0-1.42-1.42l-2,2a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L18.37,28C23.74,27.55,28,22.35,28,16Z"
        />
      </g>
    </svg>
  ),
  edit: (props: IconProps) => (
    <svg
      // width="800px"
      // height="800px"
      viewBox="0 0 1024 1024"
      className="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M705.3 177.1c-13.2-7.6-27.8-11.5-42.7-11.5-7.4 0-14.9 1-22.3 3-21.7 5.8-39.9 19.6-51.4 39 1 0.5 2 1 3 1.6l142.5 82.3c1 0.6 1.9 1.2 2.8 1.8 22.9-40.9 8.7-92.7-31.9-116.2z"
        fill="#FFBC00"
      />
      <path
        d="M774.2 221.4c-8-29.8-27.1-54.8-53.9-70.2-26.8-15.4-57.9-19.5-87.8-11.6-29.8 8-54.8 27.1-70.2 53.9-2.2 3.8-4.1 7.6-5.8 11.5-11.1 3.3-20.3 10.6-26.1 20.6L309.6 608.1c-4.8 8.4-6.6 17.6-5.8 26.6-4.9 5.9-7.6 14-7.6 23.4v171.8c0 13.3 5.5 24.1 15 29.7l0.1 0.1s0.1 0 0.1 0.1c4.3 2.4 9.1 3.7 14.1 3.7 6.2 0 12.7-1.9 19.1-5.5l148.8-85.9c8.1-4.7 13.8-11.1 16.5-18.3 8.4-3.9 15.4-10.2 20.1-18.3L750.8 353c6-10.4 7.3-22.1 4.8-32.9 2.5-3.4 4.9-7 7-10.8 15.5-26.9 19.6-58.1 11.6-87.9z m-37 71.8c-0.9-0.6-1.9-1.2-2.8-1.8l-142.5-82.3c-1-0.6-2-1.1-3-1.6 11.5-19.3 29.7-33.1 51.4-39 7.4-2 14.9-3 22.3-3 14.8 0 29.5 3.9 42.7 11.5 40.6 23.6 54.8 75.4 31.9 116.2z m-180.8-52.6c2-3.4 5.2-5.9 9.1-7 1.3-0.4 2.6-0.5 4-0.5 2.6 0 5.1 0.7 7.4 2l142.5 82.3c5 2.9 7.7 8.2 7.5 13.6l-263.4 70.6 92.9-161z m-78 505.4l-148.8 85.9c-1.3 0.8-2.4 1.2-3.1 1.4-0.2-0.7-0.4-1.8-0.4-3.4V658c0-1.6 0.2-2.7 0.4-3.4 0.7 0.2 1.8 0.6 3.1 1.4l148.8 85.9c1.3 0.8 2.2 1.5 2.7 2-0.4 0.6-1.3 1.3-2.7 2.1z m-167-117.8s-0.1 0-0.1 0.1l-0.1 0.1v-0.4l0.2 0.2z m200.3 115.9v-0.2-0.2l0.3 0.2-0.3 0.2z m-7.7-23.8c-0.5 0.9-1.1 1.7-1.7 2.4-2.5-2.5-5.5-4.8-8.9-6.8L446.8 689l89-23.8-31.8 55.1z m53.1-91.8l-147 39.4-62.7-36.2 245.8-65.9-36.1 62.7z m57.4-99.4l-265.7 71.2 36.2-62.7 265.7-71.2-36.2 62.7z m57.3-99.4l-265.7 71.2 36.2-62.7L708 367l-36.2 62.7z"
        fill="#46287C"
      />
      <path
        d="M406.1 500.9l265.7-71.2L708 367l-265.7 71.2zM726.9 330.9c0.2-5.4-2.5-10.7-7.5-13.6L576.9 235c-2.3-1.3-4.8-2-7.4-2-1.3 0-2.6 0.2-4 0.5-3.9 1-7.1 3.5-9.1 7l-92.9 160.9 263.4-70.5z m-174.3-53.3c9.1-15.7 29.2-21.1 44.9-12 15.7 9.1 21.1 29.2 12 44.9-9.1 15.7-29.2 21.1-44.9 12-15.7-9.1-21.1-29.2-12-44.9zM348.7 600.3l265.8-71.2 36.1-62.7-265.7 71.2zM493.4 716c3.4 2 6.4 4.2 8.9 6.8 0.6-0.7 1.2-1.5 1.7-2.4l31.8-55.1-89 23.8 46.6 26.9zM410.1 667.8l147-39.3 36.1-62.7-245.7 65.9zM311.3 859.6c-0.1 0-0.1 0 0 0-0.1 0.2 0 0.2 0 0.2 0.1-0.1 0.1-0.1 0-0.2zM311.3 628.3c0-0.1 0-0.1 0 0 0.1-0.1 0.1-0.1 0-0.2-0.1 0-0.1 0-0.1 0.1s0 0.1 0.1 0.1zM355.6 671c-14.3-8.2-26.5-15.3-27.2-15.6-0.7-0.3-2-0.4-2.1 0.1-0.1 0.5-0.2 16-0.2 32.5v111.8c0 16.5 0 30.6 0.1 31.3 0.1 0.7 0.7 1.9 1.2 1.7 0.5-0.2 13.9-7.8 28.2-16.1l96.8-55.9c14.3-8.2 26.5-15.3 27.1-15.7 0.6-0.4 1.3-1.5 0.9-1.9-0.4-0.3-13.7-8.1-28-16.4L355.6 671zM511.7 743.9c0 0.1 0 0.1 0 0 0 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0-0.2-0.1 0-0.1 0-0.1 0.1z"
        fill="#FFBC00"
      />
      <path
        d="M564.589235 322.494987a32.9 32.9 0 1 0 32.9-56.984471 32.9 32.9 0 1 0-32.9 56.984471Z"
        fill="#FFFFFF"
      />
    </svg>
  ),
  right: (props: IconProps) => (
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      id="right-2"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line"
      {...props}
    >
      <polyline
        id="primary"
        points="7.5 3 16.5 12 7.5 21"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth={2}
        stroke="#363853"
        style={{ fill: 'none' }}
      ></polyline>
    </svg>
  ),
  books: (props: IconProps) => (
    <svg viewBox="0 0 64 64" id="TwoTone" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title />

      <desc />

      <g data-name="Stroke copy 3" id="Stroke_copy_3">
        <polygon points="42 59 38 56 34 59 34 49 42 49 42 59" style={{ fill: 'cff09e' }} />

        <path
          d="M19.45,51H50V45H12a4,4,0,0,0-4,4v8a4,4,0,0,0,4,4H50V57H15V55.45A4.45,4.45,0,0,1,19.45,51Z"
          style={{ fill: '#79bd9a' }}
        />

        <path
          d="M14,49H50a0,0,0,0,1,0,0v8a0,0,0,0,1,0,0H14a2,2,0,0,1-2-2V51A2,2,0,0,1,14,49Z"
          style={{ fill: '#cff09e' }}
        />

        <polygon points="43 57 39 54 35 57 35 49 43 49 43 57" style={{ fill: '#a8dba8' }} />

        <path
          d="M11,11H43a4,4,0,0,1,4,4v6a4,4,0,0,1-4,4H11a0,0,0,0,1,0,0V11A0,0,0,0,1,11,11Z"
          style={{ fill: '#79bd9a' }}
        />

        <path
          d="M11,14H42a1,1,0,0,1,1,1v6a1,1,0,0,1-1,1H11a0,0,0,0,1,0,0V14A0,0,0,0,1,11,14Z"
          style={{ fill: '#a8dba8' }}
        />

        <path d="M21,25H19a4,4,0,0,0,0,8H53V29H25A4,4,0,0,1,21,25Z" style={{ fill: '#cff09e' }} />

        <path d="M20,33H19a6,6,0,0,0,0,12H45V35H22A2,2,0,0,1,20,33Z" style={{ fill: '#cff09e' }} />

        <path
          d="M20,36H45a0,0,0,0,1,0,0v6a0,0,0,0,1,0,0H20a3,3,0,0,1-3-3v0A3,3,0,0,1,20,36Z"
          style={{ fill: '#a8dba8' }}
        />

        <path d="M19,3H14v8H54a2,2,0,0,0,2-2V7H23A4,4,0,0,1,19,3Z" style={{ fill: '#cff09e' }} />

        <polygon points="27 15 24 12 21 15 21 7 27 7 27 15" style={{ fill: '#a8dba8' }} />
      </g>

      <g data-name="Stroke Close copy 3" id="Stroke_Close_copy_3">
        <path
          d="M14,48a1,1,0,0,0,0,2H34v2H14a1,1,0,0,0,0,2H34v3a1,1,0,0,0,1.6.8L39,55.25l3.4,2.55a1,1,0,0,0,1.05.09A1,1,0,0,0,44,57V54h2a1,1,0,0,0,0-2H44V50h2a1,1,0,0,0,0-2Zm28,7-2.4-1.8a1,1,0,0,0-1.2,0L36,55V50h6Z"
          style={{ fill: '#3b8686' }}
        />

        <path d="M29,56H14a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2Z" style={{ fill: '#3b8686' }} />

        <path d="M24,28H20a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z" style={{ fill: '#3b8686' }} />

        <path d="M31,28H28a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z" style={{ fill: '#3b8686' }} />

        <path d="M33,19H30a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z" style={{ fill: '#3b8686' }} />

        <path d="M41,19H37a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Z" style={{ fill: '#3b8686' }} />

        <path d="M34,8H52a1,1,0,0,0,0-2H34a1,1,0,0,0,0,2Z" style={{ fill: '#3b8686' }} />

        <path
          d="M57,9V5a3,3,0,0,0-3-3H14a1,1,0,0,0-1,1v7H8a1,1,0,0,0,0,2h2V24H8a1,1,0,0,0,0,2h7a4.91,4.91,0,0,0,.75,6.79A7,7,0,0,0,14.11,44H12a5,5,0,0,0-5,5v8a5,5,0,0,0,5,5H50a1,1,0,0,0,1-1V45a1,1,0,0,0-1-1H46V34H56a1,1,0,0,0,0-2H54V26h2a1,1,0,0,0,0-2H47a4.92,4.92,0,0,0,1-3V15a4.92,4.92,0,0,0-1-3h7A3,3,0,0,0,57,9ZM15,4H54a1,1,0,0,1,1,1V9a1,1,0,0,1-1,1H28V8h2a1,1,0,0,0,0-2H19a1,1,0,0,0,0,2h1v2H15ZM12,14V12h8v2Zm14-2-1.2-1.6a1,1,0,0,0-1.6,0L22,12V8h4Zm-2,.67L25,14H23ZM49,60H12a3,3,0,0,1-3-3V49a3,3,0,0,1,3-3H49ZM44,36H19a1,1,0,0,0,0,2H44v2H19a1,1,0,0,0,0,2H44v2H19a5,5,0,0,1,0-10H44Zm8-8H35a1,1,0,0,0,0,2H52v2H19a3,3,0,0,1,0-6H52ZM46,15v6a3,3,0,0,1-3,3H12V21H26a1,1,0,0,0,0-2H12V16H42a1,1,0,0,0,0-2H28V12H43A3,3,0,0,1,46,15Z"
          style={{ fill: '#3b8686' }}
        />
      </g>
    </svg>
  ),
  delete: (props: IconProps) => (
    <svg
      fill="#000000"
      viewBox="0 0 24 24"
      id="delete-alt"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line"
      {...props}
    >
      <path
        id="secondary"
        d="M5,8H18a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a0,0,0,0,1,0,0V8A0,0,0,0,1,5,8Z"
        transform="translate(26 2) rotate(90)"
        style={{ fill: '#2ca9bc', strokeWidth: 2 }}
      ></path>
      <path
        id="primary"
        d="M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7"
        style={{
          fill: 'none',
          stroke: '#000000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></path>
      <path
        id="primary-2"
        data-name="primary"
        d="M10,11v6m4-6v6M4,7H20M18,20V7H6V20a1,1,0,0,0,1,1H17A1,1,0,0,0,18,20Z"
        style={{
          fill: 'none',
          stroke: '#000000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: 2,
        }}
      ></path>
    </svg>
  ),
  sort: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.1924 5.65685C11.5829 5.26633 11.5829 4.63316 11.1924 4.24264L8.36397 1.41421C8.30576 1.356 8.24485 1.30212 8.18165 1.25259C7.50286 0.720577 6.55947 0.689024 5.84929 1.15793C5.73839 1.23115 5.63317 1.31658 5.53554 1.41421L2.70711 4.24264C2.31658 4.63316 2.31658 5.26633 2.70711 5.65685C3.09763 6.04738 3.7308 6.04738 4.12132 5.65685L6.00003 3.77814V18C6.00003 18.5523 6.44775 19 7.00003 19C7.55232 19 8.00003 18.5523 8.00003 18V3.8787L9.77818 5.65685C10.1687 6.04737 10.8019 6.04737 11.1924 5.65685Z"
        fill="#0F0F0F"
      />
      <path
        d="M12.7071 18.3432C12.3166 18.7337 12.3166 19.3668 12.7071 19.7574L15.5355 22.5858C15.6332 22.6834 15.7384 22.7689 15.8493 22.8421C16.6256 23.3546 17.6805 23.2692 18.364 22.5858L21.1924 19.7574C21.5829 19.3668 21.5829 18.7337 21.1924 18.3432C20.8019 17.9526 20.1687 17.9526 19.7782 18.3432L18 20.1213L18 6C18 5.44771 17.5523 5 17 5C16.4477 5 16 5.44771 16 6L16 20.2218L14.1213 18.3432C13.7308 17.9526 13.0976 17.9526 12.7071 18.3432Z"
        fill="#0F0F0F"
      />
    </svg>
  ),
  list: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plusCircle: (props: IconProps) => (
    <svg
      fill="#000000"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
    </svg>
  ),
};
