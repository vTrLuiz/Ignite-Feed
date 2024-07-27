interface EditProps {
    // Define the props for the Edit component here
}

function Edit(props: EditProps) {
    return (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <clipPath id="a">
                    <rect
                        rx={-0.5}
                        width={19}
                        height={19}
                        transform="translate(.5 .5)"
                        fill="#fff"
                        fillOpacity={0}
                    />
                </clipPath>
            </defs>
            <rect
                rx={-0.5}
                width={19}
                height={19}
                transform="translate(.5 .5)"
                fill="#FFF"
                fillOpacity={0}
            />
            <g clipPath="url(#a)">
                <path
                    d="M16.87 16.87H3.75c-.17 0-.33-.07-.45-.18a.666.666 0 01-.18-.44v-3.5c0-.08.02-.16.05-.23.03-.08.07-.15.13-.2l9.37-9.38c.06-.06.13-.11.21-.14.08-.03.16-.05.24-.05.08 0 .16.02.24.05.08.03.15.08.21.14l3.48 3.48c.06.06.11.13.14.21.03.08.05.16.05.24 0 .08-.02.16-.05.24-.03.08-.08.15-.14.21L7.5 16.87M10.62 5L15 9.37"
                    stroke="#00B37E"
                    strokeOpacity={1}
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    )
}

export default Edit
