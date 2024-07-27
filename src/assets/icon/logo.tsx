interface LogoProps {
}

function Logo(props: LogoProps) {
  return (
    <svg
      width={64.082565}
      height={60.764606}
      viewBox="0 0 64.0826 60.7646"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M64.06.41L48.38 55.95c-.08.25-.4.33-.58.15l-10.5-9.96 7.87-27.83c.08-.26-.16-.48-.43-.41L15.4 25.37 4.96 15.46c-.19-.18-.11-.48.16-.56L63.64 0c.26-.05.5.18.42.41z"
        fill="#00B37E"
        fillOpacity={1}
        fillRule="nonzero"
        opacity={0.5}
      />
      <path
        d="M37.3 46.14l-4.04 14.37c-.08.25-.4.33-.58.15L.1 29.78c-.19-.18-.11-.48.16-.56l15.14-3.85 21.9 20.77z"
        fill="#00B37E"
        fillOpacity={1}
        fillRule="nonzero"
        opacity={0.5}
      />
      <path
        d="M45.17 18.31L37.3 46.14 15.4 25.37l29.34-7.47c.27-.07.51.15.43.41z"
        fill="#00B37E"
        fillOpacity={1}
        fillRule="nonzero"
      />
    </svg>
  )
}

export default Logo
