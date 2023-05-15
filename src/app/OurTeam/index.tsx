import React from 'react'
import data from  '@/../public/team.json'
import Image from 'next/image'

export default function Team() {
  return (
    <>
      <div className="teamCompo_Box">
        <h1 className='my-2'>Our Team</h1>
        <div className="team-box d-flex p-12 justify-between flex-wrap">
          {data.map((team)=>(
            // <div className="team-detail-container d-flex justify-between" key={team.id}>
              <div className="cardbox card teamcard my-3" style={{width: "240px"}}  key={team.id}>
                <div className="cardImage ImageBoxteam">
                  <Image src={team.MemberIamge_Url} alt='member' width={320} height={320}/>
                </div>
                <div className="card-body cardBody-team">
                  <h2>{team.memberName}</h2>
                  <h3>{team.memberSpeciality}</h3>
                  <h4>{team.memberGrade}</h4>
                  <div className="moreAboutBtn my-2">
                    <button className='btn btn-primary'>About More &rarr;</button>
                  </div>
                </div>
              </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  )
}
