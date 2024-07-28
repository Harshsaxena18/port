import React from 'react';
import './techstack.css';

const TechStack = () => {
  const frontendTech = [
    { name: 'React', img: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' },
    { name: 'HTML', img: 'data:image/png;base64,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' },
    { name: 'CSS', img: 'data:image/png;base64,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' },
    { name: 'Next', img: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png' },
    { name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png' },

    
  ];

  const backendTech = [
    { name: 'Node.js', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGgrtxuJ1Vdlrj9NWOfHYzJBkUXVqbCFKDnAPRwGYNZvNC3c9Ws04NdnGFH3ZtNgIK3vI&usqp=CAU' },
    { name: 'Express js', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEWCgoL////k5OTz8/P7+/vn5+f29vbw8PDr6+t/f398fHx1dXW/v795eXnh4eGysrKOjo6YmJjb29ulpaXR0dGfn5/KysqIiIisrKy4uLhvb29qampReE72AAASgElEQVR4nNVd6YKrKgx2AQQU61atve//nhdwKURAnDMz7eTH9JRjlUjI8iVAkmWYpGmOsyxN0yLLcvkRaJMfexta2grdhmiWyS8IY0oIHh/txMpScGYRF6VgUzsPOMeUIv1bKu+3/JbIGy1thacN67Z8+dHaMbx1jKYJQiinNJcfVH/IL1R+KfY2EtFGdFuaU5x18509nyXniZckS88nkyxlOEcp2e9XyBsV+otsK4h98/WCYFuS7mzXjvGoN7ZdbXh5f3qM5HjkeHg05VMwPxsmMVGWza3DNDsbo308cOpuo6vwHJlxd/zQVtj36caqT0oeyYjBELvPY/ddzOSSimL5a39Etcm/BMkhaVkZEKwQccHaasAoPz4JPvCsLck2FutI4Vra6ldbd2unWNnyDVDSzp1UHsfxIOfjkWVobUt2zXVkxj17DG1W46IY+yY02aP54U1f1QV1MeMXuJWZrS2xdFh+SYehPJODcnWe+NmZmluW6psXIaXp12tSAaCV7Qwv44GV1SjwwvaxTWsu+V5wgWfZhe/hZOUnSR64UOMhrZUeD1woC7Z1wmjDa1sm22THsOoYPlHNmWP2LG2IPr465UPEyweK02a7qXSq5n0UsmW0jiPzsikpqkrx/awoEmWF9pHJzJHJjLbXyLymMP7inBmnH2JFUTmNufHAM7tvzJkvaDPU9f+mis+Iib5Dp+aTHrXZPiti7Qylc/KDw7KQSOaOXrczplHNc/jNatNWl1Rt+aPDshATTUWIZeBzx5fc9gCu+WZpcUt+QIe5iCe3mnq1WRbnaAa8ZkzH9mdni0lMtBW95mheiGcIfvzWsKzsJI8ivRLPYMO6pA7r8morsvZXWVHE246a/ho2TOVmXV5tCY5UzRkef3dYVm6SkXqECzopihnt12x2H6tAFnpkWP9m/r3ZYhITlfYED17a7pHtbbEYQIEf5TtYUVQq59M7ma9jALRr38aL5Kbt0u/DAMjQ/LjND5Fo6hNm6oWZiMhf8vKGqW8SbwYSgQZE+Ga4mt4y9U1ik1ID/44BkA/gRXEznmEA9BwDSMd387EQS4Y0jAtQdBY20/GtU98kXrnMpydsdjGDP4cXqdSGMwwA7XYfa9TFsPtKxj6IF+kM1LpjXl8gCdr97j0ujI8Y6wK+AA1iALT7Xljs34klti8AEkcBrJnU77aVR+JNcbD7LgyAvOw+0cE1vX8cL5KbnhY5MTu7MqDa/L4ZfnyYjC3EHxBgilDNdH53t300ex0bXzxDhk9wYlykXQHi9AU8CoDWvx/vx5J0obEH0XRiALh+X2B5TqKvqUM1m44mVnkebfcRptUnWf4DiVkL19LZVeCUL+CcM2nNPnTCLKQ8AVeiwqnNUPvRAyOHpvWr5rq27AytPnjCLFTeqA8DIETbff0hv9QfPi6KyposPScGAy5H8/NcsiPxxu1oQmY+W5NtJCp0jgGQ/N3djCSWFU4MYFMAisW0/Wit/CJ2l+NR11oB1LXb0fxYnwwSm4YjBrDbHCw/UtT/EV6kDrgfjKZh92Vr8RGIXxwplDOEAeTdJ0aXPuItBo6mFQKQ6t0dvERsBBiAsvtS0uQHpQXu/9DAqFmTacelWBmwtBkd/8yEWYiP2IcB4PpvDYzCamqgmtUoKaBQAZhX77bUXkdfuNOVu4d+IhTESVwYAJqjmdE3Z0nT3O9920xSn4e72ACKMQAM/MbJzIxWBaB8AVM109gZw9nU3MdaOT8rFV3Vyx76pJTPqU0RUYa42T8ZJifHFLswAIrGqJiM8ek+q7JqSKi7tb66B1GBa09dc+njW9S5A5OyMo3mjgGktIkZGTE9RpJ6qKju7mLaBfE2r7yHuWFJbV/vieRZ48YAhoiB4eLhGhSTHXeWXSPe9psOvjoZrlgjefPx/qydGECEXi7bwTsqG0n97uqm6O3LUBV6nHjYz/EnvdR99xCAauupJO10YJiY6RkrkvLZyU0Jpk0eEDTeZta1OKApy4IuXoyBAeDT6c/ZGJSw10sf3NzYHUxrr6CxZLQvDSW9ypEeCk7z+8n05xOYwwGqXS+GTeCq2fdEqJWDrjy7FzszRaHFrDiTMt7gaF6kXDi5uYOrPBE6b+0Jc6LGy5xsUFO6KoA6PP1545ou0oeQOt45Nq7ULgPTpnCKDwMiUJ9kVnmXQwzgFmSGTUDg1TSrx/nR9495rGl+4Malf9hUn18E3YXiDGFhNwKSTemJ2h/AkGRjz56lEJyr5XDSkGI4QC5Hj9+BtemPFwlbGMnjzGKwhtgYAOmC10O1mlWNvURDiLYCc4q4VC+f7emQH0SIMVuex4j0PU4tDAAF42Vg8JCrupmJFujTzuEaK3zIogFyXNoXRKXvRxsDSEMIE5usl0V6tzvJE9tsO53JgyKZbb1XggkTA7Cwx6aapYipOROaZfbLQq13YRZvLG6wKy/Ke1vQqHURby1VEhdhscYqOMV+a3yYtaGVM4Abp/sF519nXiRsdXcQQg8zg4kB0DEQ+glL7YeTanYU4q7xeAItbwja0552RVzSi00jXZjRThoJVDCIm/m2z8Zdya9xtfMVlbYWf80L8bDtlTdyhTSTBWpaFEBAmTNzxmSnSt9SV9gpvbwFgraKBW/sMXMYITfxh+Vo+mMZe8ac5zv43Xy77vobOG1m/XRVemFSXBSvn9mbi06pvx6Dmw8eIiwYM+XejUJId8oWNP2O2GyJH44HJHlLdwygoIM/tGgM/RKV7+C9MZTEfWMGrE2t2lpLaZ66ZNbtBrJjAFKZ+btmPOAkbt9ubb52D/v8cfTyrdFCtytI8VLCvahmHFBmppRVUQ+wsAgPeg1jSdSCeRTjkhmkJXTBAPy9ZI3xvkiceuF3Q4YKz2SEQUtuw2Quvy5ArCJ6zmhA0Gs9mOleZJFibJlxnwBbLKs3ZX65WlEpnfGXavaiUlakG5u7tXw5r9IvZy88guaL9S7iVqzwbEFyv/yYTuwY+brsSeO9dekFSGLgSIv4gxZ0wQBCmUzzJVcliyILwcu8HWPJIRRff3K5nFoamnTVZvngmwxsMsPH4XGLIxOMRk9vF8TdCY/m1ysqmQYNF0ez8zNzRCquUkBkSpjp0HS7XiAmmUFELzqlxKumDrjdFyjUCde0uTxhNDMdxSsG8KPMhISGJQW8/PqEWZnZMABvnMkaV/eu0SNkafkd6ucvlSBL5wzXGgNAxOtnstbZv0sUDuc4iAbcwO45M12Klt1NyPiTzASRYoccV371F7iNmnzZwozPtB+g7i9QMMYSDm35hdLdjRmpmQNi9g1zJsRMOTp+gK6rAClmSC05uaIA0BcoJGbCPfDODMIJMwPeHE0/M5ZId3P1BfK7Srxxm+QLxRVbP9uBrhgAqf12xnRMbv+VXyAvL4z7PM1QutPDTKcdTZXSCPhmRtBx/YWFqay8McDV1W6srTfV7GcmseLB7y14Fn3A74sL0HfaHM2FGe+LMNXNty4RsGAfSbYuQKcpJvtmba2ZkQ4aKfwY4FeCsygCpr8HeRl6SdB4j7WjqTAA4vWfQNj8HVwsJB7WhBm4pWvSOLzRuBvFi6MZxABa45lxsFkULaHhTkT2nIF6lCvA2YYBqBUb/jIbZmLZ37cKFcLKPXOUZVwQNHEjex0A9r+FyXyCl+erxO0SjAXxA6OV4nhHgN1eiCb1p2fZzXpo5L35i5y8tM50Ib+BUqZ47TkvzCgMIPfGAHYKMoubNKx97HRzlVZyK8u+Z/qh8KWx6ytZM+rddxd41o9VWvisJ90CqVz2VdGEHMyAZN9Lb8FUdBE5baTNJK86gCIyPxMFAVulKej4A1BVYFoUWDPXxc0a3uZLHUBdZ+HMmXX/mASNlZnsDjdmkwViEEurCOB7xjkdKnOmS4H1fhlFoJOWe5ZHjLtVZ3M7/PcTZMet7jIGkrdRiQfWU2OHUzr7jbsNcJ+jWsLMnB3ri4CvDN8OB/FaqEBhp2mmZh1AAOBndg74zNbYiZeDBwTrmg6RyxNotIi1Fmwa6Lb5tCoDDCld8C7dxbH7jW07DsUX+srDEYopbR2AwoVwy00ztW0G2TafJoE8EiycC20+ySyP4SAkjJ2XYEBBo6cpLgWImXUAQTUFPFw0enc7E41dMwTdJJiXdTp7HJZ6nfCivZStDkAtDUZBTwXWAdY354atXPS2EEE3G2bM3QGSnUdJz0tckhGtdc1IbwyQ01D4wBIQ4ZLuIYTdEybK+2BfBmM+xuyX4puoDFRxoTP8uaM43zAAvaI5qAJhtYvaLqhqy2cptDMpRFlOtw4i+vDFc6tIKFAiAatsw2XKrCFwLcAc5F7Y/dB9IUU9zn3btvdbJXXjAWrpYM07wJX9oAXUeenwX4iZimylwOs+mvSkTk04k1whKiAv/9kjF4pboY8W9J/FgLZ9NLfdTXzVB1/lpoChFfCV/biDIghCk4D/zAtj0enCTH7iQzLuz9s7KHuC28ElJ+Gd0+BaoMA6Dda/mNm2bsq7k7wIE4+YBSfLizxYdg7Al/okmBBQo3mX2zw7sm5ESYyVTaf+qWiBvfERPSSMGbN9+/MyHChouQcWZMK56PR8ZZOYZk8dgj0sx3QRlNHz7fkYB6bTs8GyWp6yM7PvaYLq8/yb3tw6zAoaHDtU22GBfGzEslMBbZs7v/fM0L7PiaoD0KoZYxQTOnDW3gKjQ8becbgGb0AAGRXbw0pOJ/4sPaRtX8atRGvZ1WyMSo0yNt3dwyOdnMZ5Tgi06JEIvABPcenncjR30l4wgDyr67SIeoRiJ1EMdWYiig5zqzBW5/Vg1RWNRpDA2yocglbg+rUcODXO0riCWDIulGs2Nc2UcO2l+YW0aa1FyvFA5WSvbm4Pwb24+ZbQ0+ErlR7X15xfunv4l2zwnnKSXUvxvJ+4tW0bTnKDyFeG5q1kYKe53nza2BDkI7fO9JOGGx2bT//p3U2MRafm/mb0L+2iwe902d/MWHT6OtpAmtI/s1WTxv4I2OLYUM0ni08+jZaFJgfVvG4Jpn2Bi4Xr7yOFA8MtweDOc+gz9889ErsX6xbHeNdm8MgWQv7G0LAJW+fKbaecgPNnPmpfcy+JcUXLNq9ZoTP5gdDf2K0RHXvu2HyaHtC7DyTeHY5bdZ9yQh1Zkw+jcqau7Vp3DMDcKvTTXTR+txyXIwawHXOk5tSlkqLfp2V/IccxRxsGgK3Npz97l1NReTaftrcFr9ezZT96J+3ysWzRVm/nAuxeszEe5lb6gTW17yadsD7dSt80n/71Ae+mJTePs7BqzixfIFC29VbaDjx6TXulCtaTTo92dMUDcu/uQ28lNpPt+EmLijx4AFWgpvZ9pHJqoZNO/aecfN6+7UKt6PUz49jjfPMFcjp92NjwaY/3XY6LpQDMY44024fE5HuJiQIedYyto44PdsY6WTNur5TfopLGH0LtOk1r+BxBW5aouJjZHJvQmU3aF/iYc5tUAtp16gwOYAA59AU+BEnTht95nJ4XAziePR9YK/i7vAxHu38IAbwHUO0HPBHPTqm/SbzpiO/gyfzaIdRv54Y39feddNq9+6RTnEYx4zSlB1+guL8xWHvejR7ley/zQ1vsIdSkfxti87wRcAi1xv7BIdQWBnB2CDV+1wk7uhI58hBq+e986ziy/1+tsN3aULCQ++eIT0OxM4Nedt8YGYMZDwbgavMutP1BXu5Udfc4HqfazOULrMzotry+/W5MwCZd4gaZsXyzAzP68FAw7Y++gNp9e/zNeE20y15/1Jr2B7v/agsFZ7ott855Qt0jeqO+fyTO+gwFOma07Qna80Oo7dNPs7Etf2HqsLIdVX6fnJvKKAzAowpoUbEflzXBqk7j/NeYMUbOdi8dbfkytHn3w4Mjh6V7PfflShJXm3nW+REEtA6hNizOptgVVjAkP2hCy2RUa/uO42G1uSLNsN3PHAK3tFX+LRj+jbiotHD57X4IA9DnOiOIzuiqDeRu05si0z6u1uwSyTuqgmayq2HXgdP+Q6hdMAZUAFaA8BK4/NEEFjl9gXgyzbk9HpYCQKcYgDPZ5PCkHSaX1rd2+i5ojfGpvdVQc4UFDjqaAAPAi90HwuVuk85nUQyP5jtmDxfNY6zpQbj8AufCAKKCMzsPal1HaDf27N9UNSuTvhpUvdV5J452/9UWFTZ72laBk6FTN7f8q+Mjf9iOXZHjTTGdCte/YQB7W+1gZmnrBrW3/tX5w4Uek1p1vF6ZqaOYcacBfcmmqyTHmnZzU5axDDHxLJvbsDgWr7u47hzbFqWaD9ps8wWWpJRuQ6uADPN9EqGK7UQXeIvpPssByZfowy9cnjEyC4Bf2ux/4q0oO+AvZy0AAAAASUVORK5CYII=' },
    
    // ... other backend technologies
  ];

  const databaseTech = [
    { name: 'MongoDB', img: 'data:image/png;base64,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' },
    { name: 'MySQL', img: 'data:image/png;base64,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' },
    { name: 'Firestore', img: 'https://logowik.com/content/uploads/images/firestore6915.jpg' },
    // ... other database technologies
  ];
  const langTech = [
    { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'TypeScript', img: 'https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png' },
    { name: 'Python', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfW-Sajh4RiQOKSvKHkwk-5v0xoIhpW_z50P25HkEaDs6ezVhLtOAkyoHYMfhxv0EOAwc&usqp=CAU' },
    // ... other database technologies
  ];

  return (
    <div className="tech-stack-container">
      <div className="tech-stack-divider"></div>
      <div className="tech-stack-section">
      <div className='tech-stack-title'>Frontend</div>
        <div className="tech-stack-list">
          {frontendTech.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              <img src={tech.img} alt={tech.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="tech-stack-divider"></div>

      <div className="tech-stack-section">
        <div className='tech-stack-title'>Backend</div>
        <div className="tech-stack-list">
          {backendTech.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              <img src={tech.img} alt={tech.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="tech-stack-divider"></div>

      <div className="tech-stack-section">
      <div className='tech-stack-title'>Database</div>
        <div className="tech-stack-list">
          {databaseTech.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              <img src={tech.img} alt={tech.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="tech-stack-divider"></div>

      <div className="tech-stack-section">
      <div className='tech-stack-title'>Language</div>
        <div className="tech-stack-list">
          {langTech.map((tech, index) => (
            <div key={index} className="tech-stack-item">
              <img src={tech.img} alt={tech.name} />
            </div>
          ))}
        </div>
        
      </div>
      <div className="tech-stack-divider"></div>

      
    </div>
  );
};

export default TechStack;
