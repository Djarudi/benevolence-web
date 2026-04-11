const teamMembers = [
  {
    name: "Djarudi Habimana",
    role: "Founder | President",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSQPVgJylUCzzIwemflgJbrIKHXefw7Ut3ltPVDaStV293OWyTCfPPhTpl8uPN8Nfk51yzxz-gHJbXX591pigw2qbw5CRjBc_IYXjVfZDWmxTM6-57XBcj-CJ21lp-c8jCyqrsYpgORATmX2hWBzC-Xrv9yI_80HQiMZ0mPi8O57pZjkHEQo9GYHoU7vYMyricuiHb4w36ZHtYoSt4EIHRghMo0UDwq_dIery4=w1280",
  },
  {
    name: "Dylan Robin Nziza Mugenga",
    role: "Vice President",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSgDj5-C2eFE7oLKx-uTzhtLlCC6ALD5sFD8xG3fBbf1o6bcrBgN8CGERp63Fv8H6byrDWyxrvDHHZUbh1p_BU7y-V_N3BtjhafNs6AZdYhTNEpGPLAkMGRvztKXEVQzuPD0TSTYn6m-DmXX7BSDGhxHdu7r5EibaYu__c25W3-NhWPjS87_fBOGqGWm0Fzx1KJaQwh2i-RoaYg2tje8isReRE_yhLQ2wCO=w1280",
  },
  {
    name: "Jules Ntakirutimana",
    role: "Secretary General",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SS3cmfOarI9szuxCKQAwRXYFdlyeVsbx3kURwfKyiV7JTvwgldcNNHLRIkDrBAwlkdBaQ0R8tLvBgVWO_g1xvgg2BfZ5pDsahPfsfemaZixRWyD2z1zCOaSKVahaaR0UpheDtQjdEum9PFf-hpGebLG9f55Qx-LfLOWtYBV6rd0f9YncM3baovdOVS2ZlggM5Z9g7verxDd4pRaAYPFXcnloYsbQxZtkfh1IdU=w1280",
  },
  {
    name: "Fabrice Iradukunda",
    role: "Sports & Talents Development Coordinator",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSD_gpz7j94ttikFXsvqZ9JQ3cr8kJ_M8cnTHPkS1kRBvDRnfFg_RK0raGyxSDLkGsEFDK4RyCB_jG4nh0zxy-ZKOTeIMiZeZN3CI3TqWXT5qt_uglopgcDdCDm8V7zcdN5xnPCt6ZDnILoZ7kVwkWL0kGPMYkio3g6-z9hrUNZQ0QciZgf33IEhCE=w1280",
  },
  {
    name: "Jean Pierre Hakizuwera",
    role: "Project Coordinator",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSQTOeQQVPRCb-ufzn_4EDKES8rkroMMbDrszC_bl2kL1InSQ6j0J2MFQHr5GfAydixgsm3uSHIxUbrn3BNvWw03TMPBgTM06D5VBPlSReiw98ngOA3Wr0B80TP4_Aka_IrjgWzWn9MBec78HpirtUIXDB58_Hi_bGjg1IyoUv0Ip58YBfz2M9CjxVwLsejYLtOfDsttM5qy6jncM-55U56LilFIqGbqCGiTQA=w1280",
  },
  {
    name: "Patient Asiimwe",
    role: "Member",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0STFEAlkR6X4sR0adGicHVDLXAKKOf1Cy5IP78AxY7rb-OcXRnpUsxMFyc-cbJTxcS0k3RPcsOVdYJGdmCYvA_6jAGbdRsBngsrKOJoWC9FvVHKTpPm9fnSdDtZ9B1B8eNZHUQ9OpxZUoN_K3wBz-Ydu87DrGIHichhdmIhq0afQtIWk7_YHbwsl2gAHrXzBuCBBYGrNQ6XFTPJSmEP2WLzwdaDYW2dqkNmx_eE=w1280",
  },
  {
    name: "Shaffy Amir Manzi",
    role: "Member",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0ST-oEtgDAUknrzQ4G-uJMeOM1uwSutgssbshv4_FkUZm1Aa2T1LoV4MpTYkL0AjQd_B_JHo7PoyXDAAMCvrRdsUgY1riADG7INuaqPIagHFrio_gIFHexDpuF2qxUWGruz_OuO74yFw_ljCv6wYba-IK65fo5BjrhHYHy9WIRZR3zIgfgmGHvchehg8QjTPd6jmkTY_2bAzqA-W-0ZZTDwz60BY5hUNKDQwyHY=w1280",
  },
  {
    name: "Marie Doris Kirezi Gasasira",
    role: "Finance and Administration Officer",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0STEYWIulu5MGLxHV7QQTTbm1hhFwqfajPVLDqhMSSaRinPlwKvUWyc-9-zjBI-9Wk4IMMZ5QbBRafEbAjdkgLAbtS-e2cYWqoUY-U3j31Fc1tqT8ZUPIXpI7aWXe4LG3I2EbQt__2-JN01BymeTa2UrEHl-IcgeCYycNqBYCY0RkwG3h9alaBMGOB9MyLVwcbiOMvGvu9Ev0ki4XxhDkC8BGn1qT30_hBfqq_g=w1280",
  },
  {
    name: "Galille Mugenzi Kayumba",
    role: "Goodwill Ambassador - Europe",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SSkhEnwSnDraQrK6l07p8m4E0IqWT0V48DAlq5qGMRx8CYVFtDho_PViXdvGtX6vNIqNEvPrOf1heLbB9fIZStJWd2-_VR8HXoyH2X9Zfy9nPI85_TvFabFC5IG_U_rpUxVrkJS-7g4DPXx1yQsLvTCqkTzOhjeoFpzNkJ9eNsASFqcldYbagNP=w1280",
  },
];

const Team = () => (
  <div>
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Our Team</h1>
        <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg">
          Meet the heart and soul of our mission – a dedicated team passionate about creating positive change.
        </p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-secondary/50 rounded-2xl p-6 text-center border border-border hover:shadow-md transition-shadow">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
