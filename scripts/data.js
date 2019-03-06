$(document).ready(function() {
  var stateData = {
    AL: { fullName: 'Alabama',
          graph: '<div id="highcharts-Xta73pNDI"><script src="https://cloud.highcharts.com/inject/Xta73pNDI/" defer="defer"><\/script></div>',
          html: '<div class="alabama"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Management - directors, supervisors, vice presidents ($41.96/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Alabama.pdf">Read the Alabama Report</a></p> </div>'
    },
    AK: { fullName: 'Alaska',
          graph: '<div id="highcharts-CXirwN5xf"><script src="https://cloud.highcharts.com/inject/CXirwN5xf/" defer="defer"><\/script></div>',
          html: '<div class="alaska"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li><li>Engineers/scientists ($29.49/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Alaska.pdf">Read the Alaska Report</a></p> </div>'
    },
    AZ: { fullName: 'Arizona',
          graph: '<div id="highcharts-KuP5p2APT"><script src="https://cloud.highcharts.com/inject/KuP5p2APT/" defer="defer"><\/script></div>',
          html: '<div class="arizona"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Arizona.pdf">Read the Arizona Report</a></p> </div>'
    },
    AR: { fullName: 'Arkansas',
          graph: '<div id="highcharts-K-T6C0EO5"><script src="https://cloud.highcharts.com/inject/K-T6C0EO5/" defer="defer"><\/script></div>',
          html: '<div class="arkansas"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Arkansas.pdf">Read the Arkansas Report</a></p> </div>'
    },
    CA: { fullName: 'California',
          graph: '<div id="highcharts-pfHgXcgnb"><script src="https://cloud.highcharts.com/inject/pfHgXcgnb/" defer="defer"><\/script></div>',
          html: '<div class="california"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing or customer service ($42.12/hour)</li><li>Management - directors, supervisors, vice presidents ($37.14/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/California.pdf">Read the California Report</a></p> </div>'
    },
    CO: { fullName: 'Colorado',
          graph: '<div id="highcharts-0N80oni1E"><script src="https://cloud.highcharts.com/inject/0N80oni1E/" defer="defer"><\/script></div>',
          html: '<div class="colorado"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Colorado.pdf">Read the Colorado Report</a></p> </div>'
    },
    CT: { fullName: 'Connecticut',
          graph: '<div id="highcharts-5eMR7QwBW"><script src="https://cloud.highcharts.com/inject/5eMR7QwBW/" defer="defer"><\/script></div>',
          html: '<div class="connecticut"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Connecticut.pdf">Read the Connecticut Report</a></p> </div>'
    },
    DC: { fullName: 'District of Columbia',
          graph: '<div id="highcharts-m7GF0u1Ez"><script src="https://cloud.highcharts.com/inject/m7GF0u1Ez/" defer="defer"><\/script></div>',
          html: '<div class="dc"><strong>Most in-demand energy jobs</strong><ol><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Engineers/scientists ($11.41/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/DC.pdf">Read the District of Columbia Report</a></p> </div>'
    },
    DE: { fullName: 'Delaware',
          graph: '<div id="highcharts-5ciOeeLOh"><script src="https://cloud.highcharts.com/inject/5ciOeeLOh/" defer="defer"><\/script></div>',
          html: '<div class="delaware"><strong>Most in-demand energy jobs</strong><ol><li>Installation workers ($12.80/hour)</li><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Delaware.pdf">Read the Delaware Report</a></p> </div>'
    },
    FL: { fullName: 'Florida',
          graph: '<div id="highcharts-kpTZJuA4n"><script src="https://cloud.highcharts.com/inject/kpTZJuA4n/" defer="defer"><\/script></div>',
          html: '<div class="florida"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Florida.pdf">Read the Florida Report</a></p> </div>'
    },
    GA: { fullName: 'Georgia',
          graph: '<div id="highcharts-uSzwJ36iR"><script src="https://cloud.highcharts.com/inject/uSzwJ36iR/" defer="defer"><\/script></div>',
          html: '<div class="georgia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li><li>Drivers/dispatchers ($13.56/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Georgia.pdf">Read the Georgia Report</a></p> </div>'
    },
    HI: { fullName: 'Hawaii',
          graph: '<div id="highcharts-b2VvISQog"><script src="https://cloud.highcharts.com/inject/b2VvISQog/" defer="defer"><\/script></div>',
          html: '<div class="hawaii"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Management - directors, supervisors, vice presidents ($37.14/hour)</li><li>Sales, marketing or customer service ($42.12/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Hawaii.pdf">Read the Hawaii Report</a></p> </div>'
    },
    IA: { fullName: 'Iowa',
          graph: '<div id="highcharts-ETjNs9UuG"><script src="https://cloud.highcharts.com/inject/ETjNs9UuG/" defer="defer"><\/script></div>',
          html: '<div class="iowa"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Iowa.pdf">Read the Iowa Report</a></p> </div>'
    },
    ID: { fullName: 'Idaho',
          graph: '<div id="highcharts-Nxu0d8B3Z"><script src="https://cloud.highcharts.com/inject/Nxu0d8B3Z/" defer="defer"><\/script></div>',
          html: '<div class="idaho"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Idaho.pdf">Read the Idaho Report</a></p> </div>'
    },
    IL: { fullName: 'Illinois',
          graph: '<div id="highcharts-ZHzgivnTJ"><script src="https://cloud.highcharts.com/inject/ZHzgivnTJ/" defer="defer"><\/script></div>',
          html: '<div class="illinois"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Illinois.pdf">Read the Illinois Report</a></p> </div>'
    },
    IN: { fullName: 'Indiana',
          graph: '<div id="highcharts-M3TaHhRiJ"><script src="https://cloud.highcharts.com/inject/M3TaHhRiJ/" defer="defer"><\/script></div>',
          html: '<div class="indiana"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Indiana.pdf">Read the Indiana Report</a></p> </div>'
    },
    KS: { fullName: 'Kansas',
          graph: '<div id="highcharts-OMj1lwZfb"><script src="https://cloud.highcharts.com/inject/OMj1lwZfb/" defer="defer"><\/script></div>',
          html: '<div class="kansas"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($27.47/hour)</li><li>Technicians/mechanical support ($25.40/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Kansas.pdf">Read the Kansas Report</a></p> </div>'
    },
    KY: { fullName: 'Kentucky',
          graph: '<div id="highcharts-u2EkYFhuw"><script src="https://cloud.highcharts.com/inject/u2EkYFhuw/" defer="defer"><\/script></div>',
          html: '<div class="kentucky"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Electricians/construction laborers ($20.23/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Kentucky.pdf">Read the Kentucky Report</a></p> </div>'
    },
    LA: { fullName: 'Louisiana',
          graph: '<div id="highcharts-4jeAaKbDt"><script src="https://cloud.highcharts.com/inject/4jeAaKbDt/" defer="defer"><\/script></div>',
          html: '<div class="louisiana"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($25.42/hour)</li><li>Technicians/mechanical support ($19.66/hour)</li><li>Sales, marketing or customer service ($30.80/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Louisiana.pdf">Read the Louisiana Report</a></p> </div>'
    },
    ME: { fullName: 'Maine',
          graph: '<div id="highcharts-_uv2aRNFl"><script src="https://cloud.highcharts.com/inject/_uv2aRNFl/" defer="defer"><\/script></div>',
          html: '<div class="maine"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($30.87/hour)</li><li>Technicians/mechanical support ($28.06/hour)</li><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Maine.pdf">Read the Maine Report</a></p> </div>'
    },
    MA: { fullName: 'Massachusetts',
          graph: '<div id="highcharts-xlJMXRZw0"><script src="https://cloud.highcharts.com/inject/xlJMXRZw0/" defer="defer"><\/script></div>',
          html: '<div class="massachusetts"><strong>Most in-demand energy jobs</strong><ol><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Massachusetts.pdf">Read the Massachusetts Report</a></p> </div>'
    },
    MD: { fullName: 'Maryland',
          graph: '<div id="highcharts-1rbvFyUAb"><script src="https://cloud.highcharts.com/inject/1rbvFyUAb/" defer="defer"><\/script></div>',
          html: '<div class="maryland"><strong>Most in-demand energy jobs</strong><ol><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Maryland.pdf">Read the Maryland Report</a></p> </div>'
    },
    MI: { fullName: 'Michigan',
          graph: '<div id="highcharts-vGYx-PunI"><script src="https://cloud.highcharts.com/inject/vGYx-PunI/" defer="defer"><\/script></div>',
          html: '<div class="michigan"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Michigan.pdf">Read the Michigan Report</a></p> </div>'
    },
    MN: { fullName: 'Minnesota',
          graph: '<div id="highcharts-jZxlYnMHY"><script src="https://cloud.highcharts.com/inject/jZxlYnMHY/" defer="defer"><\/script></div>',
          html: '<div class="minnesota"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Management - directors, supervisors, vice presidents ($38.30/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Minnesota.pdf">Read the Minnesota Report</a></p> </div>'
    },
    MS: { fullName: 'Mississippi',
          graph: '<div id="highcharts-OpaXemc_N"><script src="https://cloud.highcharts.com/inject/OpaXemc_N/" defer="defer"><\/script></div>',
          html: '<div class="mississippi"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Installation workers ($16.59/hour)</li><li>Electricians/construction laborers ($20.23/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Mississippi.pdf">Read the Mississippi Report</a></p> </div>'
    },
    MO: { fullName: 'Missouri',
          graph: '<div id="highcharts-VvSy9a3ku"><script src="https://cloud.highcharts.com/inject/VvSy9a3ku/" defer="defer"><\/script></div>',
          html: '<div class="missouri"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Management - directors, supervisors, vice presidents ($38.30/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Missouri.pdf">Read the Missouri Report</a></p> </div>'
    },
    MT: { fullName: 'Montana',
          graph: '<div id="highcharts-z50NkOziD"><script src="https://cloud.highcharts.com/inject/z50NkOziD/" defer="defer"><\/script></div>',
          html: '<div class="montana"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($30.31/hour)</li><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Montana.pdf">Read the Montana Report</a></p> </div>'
    },
    NE: { fullName: 'Nebraska',
          graph: '<div id="highcharts-BepeXTUGz"><script src="https://cloud.highcharts.com/inject/BepeXTUGz/" defer="defer"><\/script></div>',
          html: '<div class="nebraska"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Installation workers ($20.02/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Nebraska.pdf">Read the Nebraska Report</a></p> </div>'
    },
    NC: { fullName: 'North Carolina',
          graph: '<div id="highcharts-DBYakTToB"><script src="https://cloud.highcharts.com/inject/DBYakTToB/" defer="defer"><\/script></div>',
          html: '<div class="northcarolina"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NorthCarolina.pdf">Read the North Carolina Report</a></p> </div>'
    },
    NV: { fullName: 'Nevada',
          graph: '<div id="highcharts-NI3igG1PF"><script src="https://cloud.highcharts.com/inject/NI3igG1PF/" defer="defer"><\/script></div>',
          html: '<div class="nevada"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Engineers/scientists ($31.88/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Nevada.pdf">Read the Nevada Report</a></p> </div>'
    },
    NH: { fullName: 'New Hampshire',
          graph: '<div id="highcharts-D6qXpFXKS"><script src="https://cloud.highcharts.com/inject/D6qXpFXKS/" defer="defer"><\/script></div>',
          html: '<div class="newhampshire"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewHampshire.pdf">Read the New Hampshire Report</a></p> </div>'
    },
    NJ: { fullName: 'New Jersey',
          graph: '<div id="highcharts-4KloNT0YE"><script src="https://cloud.highcharts.com/inject/4KloNT0YE/" defer="defer"><\/script></div>',
          html: '<div class="newjersey"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.02/hour)</li><li>Management - directors, supervisors, vice presidents ($45.97/hour)</li><li>Electricians/construction laborers ($23.41/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewJersey.pdf">Read the New Jersey Report</a></p> </div>'
    },
    NY: { fullName: 'New York',
          graph: '<div id="highcharts-Gc4uPMUoQ"><script src="https://cloud.highcharts.com/inject/Gc4uPMUoQ/" defer="defer"><\/script></div>',
          html: '<div class="newyork"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.02/hour)</li><li>Sales, marketing or customer service ($28.77/hour)</li><li>Management - directors, supervisors, vice presidents ($45.97/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewYork.pdf">Read the New York Report</a></p> </div>'
    },
    NM: { fullName: 'New Mexico',
          graph: '<div id="highcharts-5E_8PbEdx"><script src="https://cloud.highcharts.com/inject/5E_8PbEdx/" defer="defer"><\/script></div>',
          html: '<div class="newmexico"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Management - directors, supervisors, vice presidents ($50.52/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewMexico.pdf">Read the New Mexico Report</a></p> </div>'
    },
    ND: { fullName: 'North Dakota',
          graph: '<div id="highcharts-WQP83UcrU"><script src="https://cloud.highcharts.com/inject/WQP83UcrU/" defer="defer"><\/script></div>',
          html: '<div class="northdakota"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($27.47/hour)</li><li>Drivers/dispatchers ($15.42/hour)</li><li>Technicians/mechanical support ($25.40/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NorthDakota.pdf">Read the North Dakota Report</a></p> </div>'
    },
    OH: { fullName: 'Ohio',
          graph: '<div id="highcharts-PdDnZpS-G"><script src="https://cloud.highcharts.com/inject/PdDnZpS-G/" defer="defer"><\/script></div>',
          html: '<div class="ohio"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Ohio.pdf">Read the Ohio Report</a></p> </div>'
    },
    OK: { fullName: 'Oklahoma',
          graph: '<div id="highcharts-8FaSEQ4A3"><script src="https://cloud.highcharts.com/inject/8FaSEQ4A3/" defer="defer"><\/script></div>',
          html: '<div class="oklahoma"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($19.66/hour)</li><li>Electricians/construction laborers ($25.42/hour)</li><li>Sales, marketing or customer service ($30.80/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Oklahoma.pdf">Read the Oklahoma Report</a></p> </div>'
    },
    OR: { fullName: 'Oregon',
          graph: '<div id="highcharts-0lako91PD"><script src="https://cloud.highcharts.com/inject/0lako91PD/" defer="defer"><\/script></div>',
          html: '<div class="oregon"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li><li>Management - directors, supervisors, vice presidents ($37.14/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Oregon.pdf">Read the Oregon Report</a></p> </div>'
    },
    PA: { fullName: 'Pennsylvania',
          graph: '<div id="highcharts-Avjc5mMJw"><script src="https://cloud.highcharts.com/inject/Avjc5mMJw/" defer="defer"><\/script></div>',
          html: '<div class="pennsylvania"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.02/hour)</li><li>Electricians/construction laborers ($23.41/hour)</li><li>Sales, marketing or customer service ($28.77/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Pennsylvania.pdf">Read the Pennsylvania Report</a></p> </div>'
    },
    RI: { fullName: 'Rhode Island',
          graph: '<div id="highcharts-wFZ537IXl"><script src="https://cloud.highcharts.com/inject/wFZ537IXl/" defer="defer"><\/script></div>',
          html: '<div class="rhodeisland"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/RhodeIsland.pdf">Read the Rhode Island Report</a></p> </div>'
    },
    SC: { fullName: 'South Carolina',
          graph: '<div id="highcharts-NhhzyD1Bi"><script src="https://cloud.highcharts.com/inject/NhhzyD1Bi/" defer="defer"><\/script></div>',
          html: '<div class="southcarolina"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/SouthCarolina.pdf">Read the South Carolina Report</a></p> </div>'
    },
    SD: { fullName: 'South Dakota',
          graph: '<div id="highcharts-SY1cqFznj"><script src="https://cloud.highcharts.com/inject/SY1cqFznj/" defer="defer"><\/script></div>',
          html: '<div class="southdakota"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/SouthDakota.pdf">Read the South Dakota Report</a></p> </div>'
    },
    TN: { fullName: 'Tennessee',
          graph: '<div id="highcharts-17Mi7FVPY"><script src="https://cloud.highcharts.com/inject/17Mi7FVPY/" defer="defer"><\/script></div>',
          html: '<div class="tennessee"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Electricians/construction laborers ($20.23/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Tennessee.pdf">Read the Tennessee Report</a></p> </div>'
    },
    TX: { fullName: 'Texas',
          graph: '<div id="highcharts-Lms16C8Rn"><script src="https://cloud.highcharts.com/inject/Lms16C8Rn/" defer="defer"><\/script></div>',
          html: '<div class="texas"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($19.66/hour)</li><li>Electricians/construction laborers ($25.42/hour)</li><li>Sales, marketing or customer service ($30.80/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Texas.pdf">Read the Texas Report</a></p> </div>'
    },
    UT: { fullName: 'Utah',
          graph: '<div id="highcharts-g6CrdnMLs"><script src="https://cloud.highcharts.com/inject/g6CrdnMLs/" defer="defer"><\/script></div>',
          html: '<div class="utah"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li><li>Management - directors, supervisors, vice presidents ($50.52/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Utah.pdf">Read the Utah Report</a></p> </div>'
    },
    VT: { fullName: 'Vermont',
          graph: '<div id="highcharts-yk8GLuIPr"><script src="https://cloud.highcharts.com/inject/yk8GLuIPr/" defer="defer"><\/script></div>',
          html: '<div class="vermont"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Engineers/scientists ($54.35/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Vermont.pdf">Read the Vermont Report</a></p> </div>'
    },
    VA: { fullName: 'Virginia',
          graph: '<div id="highcharts-s3poQ9Cto"><script src="https://cloud.highcharts.com/inject/s3poQ9Cto/" defer="defer"><\/script></div>',
          html: '<div class="virginia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Installation workers ($12.80/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Virginia.pdf">Read the Virginia Report</a></p> </div>'
    },
    WA: { fullName: 'Washington',
          graph: '<div id="highcharts-T6ARE4FYg"><script src="https://cloud.highcharts.com/inject/T6ARE4FYg/" defer="defer"><\/script></div>',
          html: '<div class="washington"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li><li>Sales, marketing or customer service ($42.12/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Washington.pdf">Read the Washington Report</a></p> </div>'
    },
    WI: { fullName: 'Wisconsin',
          graph: '<div id="highcharts-Bo6GGZ1Uz"><script src="https://cloud.highcharts.com/inject/Bo6GGZ1Uz/" defer="defer"><\/script></div>',
          html: '<div class="wisconsin"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Wisconsin.pdf">Read the Wisconsin Report</a></p> </div>'
    },
    WV: { fullName: 'West Virginia',
          graph: '<div id="highcharts-Jgoq9tK3L"><script src="https://cloud.highcharts.com/inject/Jgoq9tK3L/" defer="defer"><\/script></div>',
          html: '<div class="westvirginia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/WestVirginia.pdf">Read the West Virginia Report</a></p> </div>'
    },
    WY: { fullName: 'Wyoming',
          graph: '<div id="highcharts-B1QCKNs4m"><script src="https://cloud.highcharts.com/inject/B1QCKNs4m/" defer="defer"><\/script></div>',
          html: '<div class="wyoming"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Drivers/dispatchers ($29.89/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State.pdf">Read the 2019 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Wyoming.pdf">Read the Wyoming Report</a></p> </div>'
    },
  }


  $('#map').usmap({
    click: function(event, data) {
      $('#stateInfo')
          .html('<h1>' + stateData[data.name].fullName + '</div>')
          .append(stateData[data.name].html)
          .append(stateData[data.name].graph)
          .append(stateData[data.name].source)
      }

    });

    $('#map').css('width' , '100%').css('height' , '100%')
});
