const DataWeb = {
    linkImg: [
        "Image/goi-cuon-tom-thit-4-chiec-49434.jpg",
        "Image/cach-nau-oi-la-dua-ngon-phunutoday_vn.jpg",
        "Image/212banhmitainhahangconfetti1.jpg"
    ],  
    social: [
        {
			Id: 1,
			Name: 'Facebook',
			Tags: `<svg version="1.1" height="100%" width="100%" viewBox="0 0 112.196 112.196"
            style="enable-background:new 0 0 112.196 112.196;">
            <circle style="fill:white;" cx="56.098" cy="56.098" r="56.098" />
            <path style="fill:black;"
                d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
            c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z" />
            </svg>`
		},
		{
			Id: 2,
			Name: 'Youtube',
			Tags: `<svg height="100%" viewBox="0 0 512 512" width="100%">
						<path style="fill:white;" d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0" />
						<path style="fill:white;"
							d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0" />
					</svg>`
		},
		{
			Id: 3,
			Name: 'Twitter',
			Tags: `<svg height="100%" viewBox="0 0 512 512" width="100%">
						<path style="fill: white;"
							d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0" />
					</svg>`
		},
		{
			Id: 4,
			Name: 'Instagram',
			Tags: `<svg height="100%" viewBox="0 0 512 512" width="100%">
						<path style="fill:white";
							d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0" />
						<path style="fill:white;"
							d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0" />
						<path style="fill:white;"
							d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0" />
					</svg>`
		},
		{
			Id: 5,
			Name: 'GooglePlus',
			Tags: `<svg version="1.1" viewBox="0 0 112.196 112.196" eight="100%" width="100%">
            <circle id="XMLID_30_" style="fill:white;" cx="56.098" cy="56.097" r="56.098" />
            <path style="fill:white;" d="M19.531,58.608c-0.199,9.652,6.449,18.863,15.594,21.867c8.614,2.894,19.205,0.729,24.937-6.648
                c4.185-5.169,5.136-12.06,4.683-18.498c-7.377-0.066-14.754-0.044-22.12-0.033c-0.012,2.628,0,5.246,0.011,7.874
                c4.417,0.122,8.835,0.066,13.252,0.155c-1.115,3.821-3.655,7.377-7.51,8.757c-7.443,3.28-16.94-1.005-19.282-8.813
                c-2.827-7.477,1.801-16.5,9.442-18.675c4.738-1.667,9.619,0.21,13.673,2.673c2.054-1.922,3.976-3.976,5.864-6.052
                c-4.606-3.854-10.525-6.217-16.61-5.698C29.526,35.659,19.078,46.681,19.531,58.608z" />
            <path style="fill:white;"
                d="M79.102,48.668c-0.022,2.198-0.045,4.407-0.056,6.604c-2.209,0.022-4.406,0.033-6.604,0.044
                c0,2.198,0,4.384,0,6.582c2.198,0.011,4.407,0.022,6.604,0.045c0.022,2.198,0.022,4.395,0.044,6.604c2.187,0,4.385-0.011,6.582,0
                c0.012-2.209,0.022-4.406,0.045-6.615c2.197-0.011,4.406-0.022,6.604-0.033c0-2.198,0-4.384,0-6.582
                c-2.197-0.011-4.406-0.022-6.604-0.044c-0.012-2.198-0.033-4.407-0.045-6.604C83.475,48.668,81.288,48.668,79.102,48.668z" />
            <path style="fill:black;" d="M19.531,58.608c-0.453-11.927,9.994-22.949,21.933-23.092c6.085-0.519,12.005,1.844,16.61,5.698
                    c-1.889,2.077-3.811,4.13-5.864,6.052c-4.054-2.463-8.935-4.34-13.673-2.673c-7.642,2.176-12.27,11.199-9.442,18.675
                    c2.342,7.808,11.839,12.093,19.282,8.813c3.854-1.38,6.395-4.936,7.51-8.757c-4.417-0.088-8.835-0.033-13.252-0.155
                    c-0.011-2.628-0.022-5.246-0.011-7.874c7.366-0.011,14.743-0.033,22.12,0.033c0.453,6.439-0.497,13.33-4.683,18.498
                    c-5.732,7.377-16.322,9.542-24.937,6.648C25.981,77.471,19.332,68.26,19.531,58.608z" />
            <path style="fill:black;" d="M79.102,48.668c2.187,0,4.373,0,6.57,0c0.012,2.198,0.033,4.407,0.045,6.604
                    c2.197,0.022,4.406,0.033,6.604,0.044c0,2.198,0,4.384,0,6.582c-2.197,0.011-4.406,0.022-6.604,0.033
                    c-0.022,2.209-0.033,4.406-0.045,6.615c-2.197-0.011-4.396,0-6.582,0c-0.021-2.209-0.021-4.406-0.044-6.604
                    c-2.197-0.023-4.406-0.033-6.604-0.045c0-2.198,0-4.384,0-6.582c2.198-0.011,4.396-0.022,6.604-0.044
                    C79.057,53.075,79.079,50.866,79.102,48.668z" />
            </svg>`
        },
        {
			Id: 6,
			Name: 'Pinterest',
			Tags: `<svg version="1.1" viewBox="0 0 112.198 112.198" height="100%" width="100%">
            <circle style="fill:white;" cx="56.099" cy="56.1" r="56.098" />
            <path style="fill:black;" d="M60.627,75.122c-4.241-0.328-6.023-2.431-9.349-4.45c-1.828,9.591-4.062,18.785-10.679,23.588
                c-2.045-14.496,2.998-25.384,5.34-36.941c-3.992-6.72,0.48-20.246,8.9-16.913c10.363,4.098-8.972,24.987,4.008,27.596
                c13.551,2.724,19.083-23.513,10.679-32.047c-12.142-12.321-35.343-0.28-32.49,17.358c0.695,4.312,5.151,5.621,1.78,11.571
                c-7.771-1.721-10.089-7.85-9.791-16.021c0.481-13.375,12.018-22.74,23.59-24.036c14.635-1.638,28.371,5.374,30.267,19.14
                C85.015,59.504,76.275,76.33,60.627,75.122L60.627,75.122z" />
            </svg>`
		}
    ],
    Icon: [
        {
            Id: 1,
            Tags: `<svg version="1.1" height="100%" width="100%" viewBox="0 0 390.126 390.125">
            <path fill="#afc67b" d="M132.64,177.859c31.162,0,56.508-34.014,56.508-75.834c0-41.817-25.347-75.841-56.508-75.841
                c-31.153,0-56.502,34.023-56.502,75.841C76.138,143.845,101.487,177.859,132.64,177.859z" />
            <path fill="#afc67b" d="M300.246,251.628c-1.159-1.579-2.27-3.068-2.864-4.348c-12.635-27.046-47.27-58.931-103.382-59.724l-2.159-0.012
                c-55.25,0-89.627,30.197-103.381,58.469c-0.475,0.967-1.52,2.222-2.627,3.549c-1.31,1.555-2.606,3.146-3.714,4.875
                c-11.619,18.075-17.543,38.426-16.669,57.299c0.916,20.037,9.305,36.131,23.581,45.312c5.768,3.705,11.992,5.572,18.522,5.572
                c13.465,0,25.793-7.584,40.079-16.368c9.083-5.598,18.465-11.374,28.886-15.697c1.168-0.385,5.954-0.973,13.781-0.973
                c9.307,0,15.991,0.828,17.419,1.321c10.173,4.491,19.107,10.382,27.748,16.068c13.247,8.731,25.755,16.97,39.326,16.97
                c5.824,0,11.469-1.537,16.795-4.563c29.382-16.693,34.979-62.492,12.484-102.088C302.942,255.303,301.597,253.448,300.246,251.628
                z" />
            <path fill="#afc67b" d="M252.796,177.859c31.147,0,56.499-34.014,56.499-75.834c0-41.817-25.352-75.841-56.499-75.841
                c-31.165,0-56.511,34.023-56.511,75.841C196.285,143.845,221.631,177.859,252.796,177.859z" />
            <path fill="#afc67b" d="M345.595,138.918c-24.975,0-44.521,25.901-44.521,58.967c0,33.051,19.558,58.955,44.521,58.955
                c24.961,0,44.531-25.904,44.531-58.955C390.126,164.82,370.568,138.918,345.595,138.918z" />
            <path fill="#afc67b" d="M89.048,197.885c0-33.065-19.558-58.967-44.522-58.967C19.561,138.918,0,164.82,0,197.885
                c0,33.051,19.561,58.955,44.526,58.955C69.491,256.84,89.048,230.936,89.048,197.885z" />
        </svg>`
        }
    ]
};