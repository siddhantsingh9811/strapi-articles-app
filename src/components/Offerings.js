import React from 'react';
import './Offerings.css';
import solarSvg from '../assets/solar.svg';
import sunSvg from '../assets/sun.svg';
import bulbSvg from '../assets/bulb.svg';


const Offerings = () => (
	<section className="offerings">
		<div className="offering-row offering-row--left">
			<svg className="animation-overlay-1" width="624" height="289" viewBox="0 0 624 289" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.5" d="M619 8.37211C467.453 -7.60632 132.487 25.1494 5 284" stroke="url(#paint0_linear_2016_108)" stroke-width="10" stroke-linecap="round" stroke-dasharray="35 35"/>
				<defs>
				<linearGradient id="paint0_linear_2016_108" x1="312" y1="5" x2="312" y2="284" gradientUnits="userSpaceOnUse">
				<stop stop-color="#FFBE0C"/>
				<stop offset="1" stop-color="#0095F5"/>
				</linearGradient>
				</defs>
			</svg>

			<div className="offering-text">
				<h3 className="offering-title"><span className="highlight">Solar</span> Rooftop Solutions</h3>
				<p className="offering-desc">Custom designed systems for residential, commercial and industrial rooftops. We manage site assessment and design installation, and commissioning so you can generate clean energy, reduce electricity bills, and lower your carbon footprint. Ongoing monitoring and maintenance support worry-free performance</p>
			<a className="learn-btn" href="/#learn-more">Learn More</a>
			</div>
			<div className="offering-illustration">
				<svg width="500" height="813" viewBox="0 0 427 813" fill="none" xmlns="http://www.w3.org/2000/svg">
					{/* Outer glows pulsate slowly */}
					<ellipse opacity="0.15" cx="405.5" cy="406.5" rx="405.5" ry="405.5" fill="url(#paint0_linear_2016_99)">
						<animate attributeName="rx" values="405.5;425;405.5" dur="6s" repeatCount="indefinite" />
						<animate attributeName="ry" values="405.5;430;405.5" dur="6s" repeatCount="indefinite" />
					</ellipse>
					<ellipse opacity="0.25" cx="405.5" cy="406.5" rx="330.5" ry="331.5" fill="url(#paint1_linear_2016_99)">
						<animate attributeName="rx" values="330.5;345;330.5" dur="6s" repeatCount="indefinite" />
						<animate attributeName="ry" values="331.5;346;331.5" dur="6s" repeatCount="indefinite" />
					</ellipse>
					<ellipse opacity="0.5" cx="424.5" cy="406.5" rx="271.5" ry="272.5" fill="url(#paint2_linear_2016_99)">
						<animate attributeName="rx" values="271.5;285;271.5" dur="6s" repeatCount="indefinite" />
						<animate attributeName="ry" values="272.5;286;272.5" dur="6s" repeatCount="indefinite" />
					</ellipse>
					<ellipse opacity="0.7" cx="434.5" cy="406.5" rx="215.5" ry="216.5" fill="url(#paint3_linear_2016_99)">
						<animate attributeName="rx" values="215.5;228;215.5" dur="6s" repeatCount="indefinite" />
						<animate attributeName="ry" values="216.5;229;216.5" dur="6s" repeatCount="indefinite" />
					</ellipse>
					{/* Core circle pulses slightly faster */}
					<circle cx="454" cy="406" r="152" fill="url(#paint4_linear_2016_99)">
						<animate attributeName="r" values="152;166;152" dur="6s" repeatCount="indefinite" />
					</circle>
					<defs>
					<linearGradient id="paint0_linear_2016_99" x1="405.5" y1="0" x2="405.5" y2="813" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint1_linear_2016_99" x1="405.5" y1="75" x2="405.5" y2="738" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint2_linear_2016_99" x1="424.5" y1="134" x2="424.5" y2="679" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint3_linear_2016_99" x1="434.5" y1="190" x2="434.5" y2="623" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					<linearGradient id="paint4_linear_2016_99" x1="454" y1="254" x2="454" y2="558" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FFBE0C"/>
					<stop offset="1" stop-color="#FF9A24"/>
					</linearGradient>
					</defs>
				</svg>
			</div>
			
		</div>

		<div className="offering-row offering-row--right">
			<svg className="animation-overlay-2" width="514" height="246" viewBox="0 0 514 246" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path opacity="0.5" d="M5.00001 7.85239C129.397 -5.66341 404.353 22.044 509 241" stroke="url(#paint0_linear_2016_109)" stroke-width="10" stroke-linecap="round" stroke-dasharray="35 35"/>
				<defs>
				<linearGradient id="paint0_linear_2016_109" x1="257" y1="5" x2="257" y2="241" gradientUnits="userSpaceOnUse">
				<stop stop-color="#FFBE0C"/>
				<stop offset="1" stop-color="#0095F5"/>
				</linearGradient>
				</defs>
			</svg>

			<div className="offering-illustration">
				<img src={solarSvg} alt="Solar park and ground mounted illustration" />
			</div>
			<div className="offering-text offering-text--right">
				<h3 className="offering-title"><span className="highlight">Solar</span> Parks And <span className="highlight">Ground Mounted</span> Solutions</h3>
				<p className="offering-desc">Turnkey development of large-scale, ground-mounted solar projects and solar parks. From land identification to project execution, we provide efficient power generation for industries, utilities, and communities, guaranteeing high output and reliable operation</p>
			<a className="learn-btn" href="/#learn-more">Learn More</a>
			</div>
		</div>

		<div className="offering-row offering-row--left">
			<div className="offering-text">
				<h3 className="offering-title">Plant <span className="highlight">O&amp;M</span> and <span className="highlight">EPC</span> Services</h3>
				<p className="offering-desc">Comprehensive operations and maintenance to maximize plant performance, minimize downtime, and protect your investment. Our EPC team delivers complete project management for all types of solar installations, focusing on quality, compliance, and timely delivery.</p>
			<a className="learn-btn" href="/#learn-more">Learn More</a>
			</div>
			<div className="offering-illustration">
				<img src={bulbSvg} alt="Operations & maintenance and EPC services illustration" />
			</div>
		</div>

	</section>
);

export default Offerings;