$(document).ready(function() {
  var stateData = {
    AL: { fullName: 'Alabama',
          graph: '<div id="highcharts-Mdk-rAg5"><script src="https://app.everviz.com/inject/Mdk-rAg5/" defer="defer"><\/script></div>',
          html: '<div class="alabama"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.99/hour)</li><li>Installation workers ($24.35/hour)</li><li>Operations or business development ($41.08/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Alabama-2020.pdf">Read the Alabama Report</a></p> </div>'
    },
    AK: { fullName: 'Alaska',
          graph: '<div id="highcharts-imqzAYra"><script src="https://app.everviz.com/inject/imqzAYra/" defer="defer"><\/script></div>',
          html: '<div class="alaska"><strong>Most in-demand energy jobs</strong><ol><li>Engineers/scientists ($45.54/hour)</li><li>Technicians/mechanical support ($24.32/hour)</li><li>Electricians/construction workers ($28.59/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Alaska-2020.pdf">Read the Alaska Report</a></p> </div>'
    },
    AZ: { fullName: 'Arizona',
          graph: '<div id="highcharts-nP2gNZg9"><script src="https://app.everviz.com/inject/nP2gNZg9/" defer="defer"><\/script></div>',
          html: '<div class="arizona"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing, or customer service ($32.48/hour)</li><li>Management — directors, supervisors, vice presidents ($39.89/hour)</li><li>Technicians/mechanical support ($21.82/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Arizona-2020.pdf">Read the Arizona Report</a></p> </div>'
    },
    AR: { fullName: 'Arkansas',
          graph: '<div id="highcharts-vwSbQQN5"><script src="https://app.everviz.com/inject/vwSbQQN5/" defer="defer"><\/script></div>',
          html: '<div class="arkansas"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.58/hour)</li><li>Installation workers ($20.77/hour)</li><li>Electricians/construction workers ($22.82/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Arkansas-2020.pdf">Read the Arkansas Report</a></p> </div>'
    },
    CA: { fullName: 'California',
          graph: '<div id="highcharts-1EkhQe2Q"><script src="https://app.everviz.com/inject/1EkhQe2Q/" defer="defer"><\/script></div>',
          html: '<div class="california"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($48.93/hour)</li><li>Sales, marketing, or customer service ($35.35/hour)</li><li>Installation workers ($27.91)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/California-2020.pdf">Read the California Report</a></p> </div>'
    },
    CO: { fullName: 'Colorado',
          graph: '<div id="highcharts-aoi-7NQL"><script src="https://app.everviz.com/inject/aoi-7NQL/" defer="defer"><\/script></div>',
          html: '<div class="colorado"><strong>Most in-demand energy jobs</strong><ol><li>Engineers/scientists ($39.49/hour)</li><li>Sales, marketing, or customer service ($32.48/hour)</li><li>Technicians/mechanical support ($21.82/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Colorado-2020.pdf">Read the Colorado Report</a></p> </div>'
    },
    CT: { fullName: 'Connecticut',
          graph: '<div id="highcharts-B6QUFtxe"><script src="https://app.everviz.com/inject/B6QUFtxe/" defer="defer"><\/script></div>',
          html: '<div class="connecticut"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($48.41/hour)</li><li>Engineers/scientists ($41.07/hour)</li><li>Technicians/mechanical support ($23.84/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Connecticut-2020.pdf">Read the Connecticut Report</a></p> </div>'
    },
    DC: { fullName: 'District of Columbia',
          graph: '<div id="highcharts-OEKBaBa7"><script src="https://app.everviz.com/inject/OEKBaBa7/" defer="defer"><\/script></div>',
          html: '<div class="dc"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($37.13/hour)</li><li>Engineers/scientists ($35.46/hour)</li><li>Sales, marketing, or customer service ($31.16/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/DC-2020.pdf">Read the District of Columbia Report</a></p> </div>'
    },
    DE: { fullName: 'Delaware',
          graph: '<div id="highcharts-y9WQeZce"><script src="https://app.everviz.com/inject/y9WQeZce/" defer="defer"><\/script></div>',
          html: '<div class="delaware"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($22.79/hour)</li><li>Sales, marketing, or customer service ($31.16/hour)</li><li>Installation workers ($20.65/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Delaware-2020.pdf">Read the Delaware Report</a></p> </div>'
    },
    FL: { fullName: 'Florida',
          graph: '<div id="highcharts-LYX4f_6n"><script src="https://app.everviz.com/inject/LYX4f_6n/" defer="defer"><\/script></div>',
          html: '<div class="florida"><strong>Most in-demand energy jobs</strong><ol><li>Installation workers ($20.65/hour)</li><li>Technicians/mechanical support ($20.28/hour)</li><li>Sales, marketing, or customer service ($31.16/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Florida-2020.pdf">Read the Florida Report</a></p> </div>'
    },
    GA: { fullName: 'Georgia',
          graph: '<div id="highcharts-OiKzipn3"><script src="https://app.everviz.com/inject/OiKzipn3/" defer="defer"><\/script></div>',
          html: '<div class="georgia"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing, or customer service ($31.16/hour)</li><li>Technicians/mechanical support ($20.28/hour)</li><li>Installation workers ($20.65/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Georgia-2020.pdf">Read the Georgia Report</a></p> </div>'
    },
    HI: { fullName: 'Hawaii',
          graph: '<div id="highcharts-icXhIOeS"><script src="https://app.everviz.com/inject/icXhIOeS/" defer="defer"><\/script></div>',
          html: '<div class="hawaii"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing, or customer service ($35.35/hour)</li><li>Electricians/construction workers ($28.59/hour)</li><li>Installation workers ($27.91)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Hawaii-2020.pdf">Read the Hawaii Report</a></p> </div>'
    },
    IA: { fullName: 'Iowa',
          graph: '<div id="highcharts-dZ0VzwdA"><script src="https://app.everviz.com/inject/dZ0VzwdA/" defer="defer"><\/script></div>',
          html: '<div class="iowa"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.52/hour)</li><li>Sales, marketing, or customer service ($33.71/hour)</li><li>Installation workers ($25.92/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Iowa-2020.pdf">Read the Iowa Report</a></p> </div>'
    },
    ID: { fullName: 'Idaho',
          graph: '<div id="highcharts-b3gAvAvY"><script src="https://app.everviz.com/inject/b3gAvAvY/" defer="defer"><\/script></div>',
          html: '<div class="idaho"><strong>Most in-demand energy jobs</strong><ol><li>Finance positions or accountants ($27.32/hour)</li><li>Operations or business development ($40.78/hour)</li><li>Technicians/mechanical support ($21.82/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Idaho-2020.pdf">Read the Idaho Report</a></p> </div>'
    },
    IL: { fullName: 'Illinois',
          graph: '<div id="highcharts-fsFQef8x"><script src="https://app.everviz.com/inject/fsFQef8x/" defer="defer"><\/script></div>',
          html: '<div class="illinois"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.25/hour)</li><li>Management — directors, supervisors, vice presidents ($43.21/hour)</li><li>Sales, marketing, or customer service ($32.37/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Illinois-2020.pdf">Read the Illinois Report</a></p> </div>'
    },
    IN: { fullName: 'Indiana',
          graph: '<div id="highcharts-T80PMfGl"><script src="https://app.everviz.com/inject/T80PMfGl/" defer="defer"><\/script></div>',
          html: '<div class="indiana"><strong>Most in-demand energy jobs</strong><ol><li>Installation workers ($20.51/hour)</li><li>Technicians/mechanical support ($21.25/hour)</li><li>Sales, marketing, or customer service ($32.37/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Indiana-2020.pdf">Read the Indiana Report</a></p> </div>'
    },
    KS: { fullName: 'Kansas',
          graph: '<div id="highcharts-kVLz8NCQ"><script src="https://app.everviz.com/inject/kVLz8NCQ/" defer="defer"><\/script></div>',
          html: '<div class="kansas"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($25.82/hour)</li><li>Technicians/mechanical support ($21.52/hour)</li><li>Engineers/scientists ($37.61)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Kansas-2020.pdf">Read the Kansas Report</a></p> </div>'
    },
    KY: { fullName: 'Kentucky',
          graph: '<div id="highcharts-9scAo7lL"><script src="https://app.everviz.com/inject/9scAo7lL/" defer="defer"><\/script></div>',
          html: '<div class="kentucky"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.99/hour)</li><li>Sales, marketing, or customer service ($32.38/hour)</li><li>Management — directors, supervisors, vice presidents ($39.94/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Kentucky-2020.pdf">Read the Kentucky Report</a></p> </div>'
    },
    LA: { fullName: 'Louisiana',
          graph: '<div id="highcharts-CD2N3Jy4"><script src="https://app.everviz.com/inject/CD2N3Jy4/" defer="defer"><\/script></div>',
          html: '<div class="louisiana"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($22.82/hour)</li><li>Sales, marketing, or customer service ($33.88/hour)</li><li>Technicians/mechanical support ($21.58/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Louisiana-2020.pdf">Read the Louisiana Report</a></p> </div>'
    },
    ME: { fullName: 'Maine',
          graph: '<div id="highcharts--qTmRkLX"><script src="https://app.everviz.com/inject/-qTmRkLX/" defer="defer"><\/script></div>',
          html: '<div class="maine"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.84/hour)</li><li>Electricians/construction workers ($29.02/hour)</li><li>Management — directors, supervisors, vice presidents ($48.41)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Maine-2020.pdf">Read the Maine Report</a></p> </div>'
    },
    MA: { fullName: 'Massachusetts',
          graph: '<div id="highcharts-t5LfCbmi"><script src="https://app.everviz.com/inject/t5LfCbmi/" defer="defer"><\/script></div>',
          html: '<div class="massachusetts"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($48.41/hour)</li><li>Sales, marketing, or customer service ($37.81/hour)</li><li>Electricians/construction workers ($29.02/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Massachusetts-2020.pdf">Read the Massachusetts Report</a></p> </div>'
    },
    MD: { fullName: 'Maryland',
          graph: '<div id="highcharts-Bp1vVlka"><script src="https://app.everviz.com/inject/Bp1vVlka/" defer="defer"><\/script></div>',
          html: '<div class="maryland"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($37.13/hour)</li><li>Engineers/scientists ($35.46/hour)</li><li>Technicians/mechanical support ($20.28/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Maryland.pdf">Read the Maryland Report</a></p> </div>'
    },
    MI: { fullName: 'Michigan',
          graph: '<div id="highcharts-6QRoILyh"><script src="https://app.everviz.com/inject/6QRoILyh/" defer="defer"><\/script></div>',
          html: '<div class="michigan"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.25/hour)</li><li>Engineers/scientists ($37.16/hour)</li><li>Management — directors, supervisors, vice presidents ($43.21)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Michigan-2020.pdf">Read the Michigan Report</a></p> </div>'
    },
    MN: { fullName: 'Minnesota',
          graph: '<div id="highcharts-jZZ7Ahl_"><script src="https://app.everviz.com/inject/jZZ7Ahl_/" defer="defer"><\/script></div>',
          html: '<div class="minnesota"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($25.82/hour)</li><li>Technicians/mechanical support ($21.52/hour)</li><li>Management — directors, supervisors, vice presidents ($41.47/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Minnesota-2020.pdf">Read the Minnesota Report</a></p> </div>'
    },
    MS: { fullName: 'Mississippi',
          graph: '<div id="highcharts-3Ph3LIvp"><script src="https://app.everviz.com/inject/3Ph3LIvp/" defer="defer"><\/script></div>',
          html: '<div class="mississippi"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.99/hour)</li><li>Management — directors, supervisors, vice presidents ($39.94/hour)</li><li>Sales, marketing, or customer service ($32.38/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Mississippi-2020.pdf">Read the Mississippi Report</a></p> </div>'
    },
    MO: { fullName: 'Missouri',
          graph: '<div id="highcharts-S4t1rhvj"><script src="https://app.everviz.com/inject/S4t1rhvj/" defer="defer"><\/script></div>',
          html: '<div class="missouri"><strong>Most in-demand energy jobs</strong><ol><li>Installation workers ($25.92/hour)</li><li>Sales, marketing, or customer service ($33.71/hour)</li><li>Management — directors, supervisors, vice presidents ($41.47/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Missouri-2020.pdf">Read the Missouri Report</a></p> </div>'
    },
    MT: { fullName: 'Montana',
          graph: '<div id="highcharts-FlavZYlT"><script src="https://app.everviz.com/inject/FlavZYlT/" defer="defer"><\/script></div>',
          html: '<div class="montana"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($24.69/hour)</li><li>Technicians/mechanical support ($21.82/hour)</li><li>Manufacturing or production positions ($21.24/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Montana-2020.pdf">Read the Montana Report</a></p> </div>'
    },
    NE: { fullName: 'Nebraska',
          graph: '<div id="highcharts-9mdWpnNY"><script src="https://app.everviz.com/inject/9mdWpnNY/" defer="defer"><\/script></div>',
          html: '<div class="nebraska"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.52/hour)</li><li>Electricians/construction workers ($25.82/hour)</li><li>IT/software or web developers ($38.76/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Nebraska-2020.pdf">Read the Nebraska Report</a></p> </div>'
    },
    NC: { fullName: 'North Carolina',
          graph: '<div id="highcharts-qzTiMN05"><script src="https://app.everviz.com/inject/qzTiMN05/" defer="defer"><\/script></div>',
          html: '<div class="northcarolina"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($37.13/hour)</li><li>Technicians/mechanical support ($20.28/hour)</li><li>Installation workers ($20.65/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NorthCarolina-2020.pdf">Read the North Carolina Report</a></p> </div>'
    },
    NV: { fullName: 'Nevada',
          graph: '<div id="highcharts-2WLHqHZL"><script src="https://app.everviz.com/inject/2WLHqHZL/" defer="defer"><\/script></div>',
          html: '<div class="nevada"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.82/hour)</li><li>Electricians/construction workers ($24.69/hour)</li><li>Sales, marketing, or customer service ($32.48/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Nevada-2020.pdf">Read the Nevada Report</a></p> </div>'
    },
    NH: { fullName: 'New Hampshire',
          graph: '<div id="highcharts-X9RV-hXo"><script src="https://app.everviz.com/inject/X9RV-hXo/" defer="defer"><\/script></div>',
          html: '<div class="newhampshire"><strong>Most in-demand energy jobs</strong><ol><li>Installation workers ($27.33/hour)</li><li>Technicians/mechanical support ($23.84/hour)</li><li>Sales, marketing, or customer service ($37.81)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewHampshire-2020.pdf">Read the New Hampshire Report</a></p> </div>'
    },
    NJ: { fullName: 'New Jersey',
          graph: '<div id="highcharts-yFw6AUbd"><script src="https://app.everviz.com/inject/yFw6AUbd/" defer="defer"><\/script></div>',
          html: '<div class="newjersey"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($51.21/hour)</li><li>Engineers/scientists ($41.11/hour)</li><li>Installation workers ($28.63/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewJersey-2020.pdf">Read the New Jersey Report</a></p> </div>'
    },
    NY: { fullName: 'New York',
          graph: '<div id="highcharts-_610Lq_k"><script src="https://app.everviz.com/inject/_610Lq_k/" defer="defer"><\/script></div>',
          html: '<div class="newyork"><strong>Most in-demand energy jobs</strong><ol><li>Management — directors, supervisors, vice presidents ($51.21/hour)</li><li>Technicians/mechanical support ($23.03/hour)</li><li>Engineers/scientists ($41.11/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewYork-2020.pdf">Read the New York Report</a></p> </div>'
    },
    NM: { fullName: 'New Mexico',
          graph: '<div id="highcharts-U_-2k9Gm"><script src="https://app.everviz.com/inject/U_-2k9Gm/" defer="defer"><\/script></div>',
          html: '<div class="newmexico"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($24.69/hour)</li><li>Sales, marketing, or customer service ($32.48/hour)</li><li>Engineers/scientists ($39.49/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NewMexico-2020.pdf">Read the New Mexico Report</a></p> </div>'
    },
    ND: { fullName: 'North Dakota',
          graph: '<div id="highcharts-4djOMPaH"><script src="https://app.everviz.com/inject/4djOMPaH/" defer="defer"><\/script></div>',
          html: '<div class="northdakota"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.52/hour)</li><li>Sales, marketing, or customer service ($33.71/hour)</li><li>Installation workers ($25.92/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/NorthDakota-2020.pdf">Read the North Dakota Report</a></p> </div>'
    },
    OH: { fullName: 'Ohio',
          graph: '<div id="highcharts-Q29_va41"><script src="https://app.everviz.com/inject/Q29_va41/" defer="defer"><\/script></div>',
          html: '<div class="ohio"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.25/hour)</li><li>Management — directors, supervisors, vice presidents ($43.21/hour)</li><li>Electricians/construction workers ($23.25/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Ohio-2020.pdf">Read the Ohio Report</a></p> </div>'
    },
    OK: { fullName: 'Oklahoma',
          graph: '<div id="highcharts-kUwJRnFb"><script src="https://app.everviz.com/inject/kUwJRnFb/" defer="defer"><\/script></div>',
          html: '<div class="oklahoma"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.58/hour)</li><li>Sales, marketing, or customer service ($33.88/hour)</li><li>Engineers/scientists ($41.32/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Oklahoma-2020.pdf">Read the Oklahoma Report</a></p> </div>'
    },
    OR: { fullName: 'Oregon',
          graph: '<div id="highcharts-MclCE4rH"><script src="https://app.everviz.com/inject/MclCE4rH/" defer="defer"><\/script></div>',
          html: '<div class="oregon"><strong>Most in-demand energy jobs</strong><ol><li>Engineers/scientists ($45.54/hour)</li><li>Management — directors, supervisors, vice presidents ($48.93/hour)</li><li>Technicians/mechanical support ($24.32/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Oregon-2020.pdf">Read the Oregon Report</a></p> </div>'
    },
    PA: { fullName: 'Pennsylvania',
          graph: '<div id="highcharts-02AMtfvD"><script src="https://app.everviz.com/inject/02AMtfvD/" defer="defer"><\/script></div>',
          html: '<div class="pennsylvania"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing, or customer service ($35.59/hour)</li><li>Management — directors, supervisors, vice presidents ($51.21/hour)</li><li>Technicians/mechanical support ($23.03/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Pennsylvania-2020.pdf">Read the Pennsylvania Report</a></p> </div>'
    },
    RI: { fullName: 'Rhode Island',
          graph: '<div id="highcharts-Dg0pTVky"><script src="https://app.everviz.com/inject/Dg0pTVky/" defer="defer"><\/script></div>',
          html: '<div class="rhodeisland"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($29.02/hour)</li><li>Sales, marketing, or customer service ($37.81/hour)</li><li>Technicians/mechanical support ($23.84/hour))</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/RhodeIsland-2020.pdf">Read the Rhode Island Report</a></p> </div>'
    },
    SC: { fullName: 'South Carolina',
          graph: '<div id="highcharts-Ha4DDACo"><script src="https://app.everviz.com/inject/Ha4DDACo/" defer="defer"><\/script></div>',
          html: '<div class="southcarolina"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($22.79/hour)</li><li>Technicians/mechanical support ($20.28/hour)</li><li>Administrative support ($17.98/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/SouthCarolina-2020.pdf">Read the South Carolina Report</a></p> </div>'
    },
    SD: { fullName: 'South Dakota',
          graph: '<div id="highcharts-xmyxyE8T"><script src="https://app.everviz.com/inject/xmyxyE8T/" defer="defer"><\/script></div>',
          html: '<div class="southdakota"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.52/hour)</li><li>Electricians/construction workers ($25.82/hour)</li><li>Sales, marketing, or customer service ($33.71/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/SouthDakota-2020.pdf">Read the South Dakota Report</a></p> </div>'
    },
    TN: { fullName: 'Tennessee',
          graph: '<div id="highcharts-NJTBz-9K"><script src="https://app.everviz.com/inject/NJTBz-9K/" defer="defer"><\/script></div>',
          html: '<div class="tennessee"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.99/hour)</li><li>Management — directors, supervisors, vice presidents ($39.94/hour)</li><li>Sales, marketing, or customer service ($32.38/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Tennessee-2020.pdf">Read the Tennessee Report</a></p> </div>'
    },
    TX: { fullName: 'Texas',
          graph: '<div id="highcharts-nXVT8NTn"><script src="https://app.everviz.com/inject/nXVT8NTn/" defer="defer"><\/script></div>',
          html: '<div class="texas"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.58/hour)</li><li>Sales, marketing, or customer service ($33.88/hour)</li><li>Electricians/construction workers ($22.82/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Texas-2020.pdf">Read the Texas Report</a></p> </div>'
    },
    UT: { fullName: 'Utah',
          graph: '<div id="highcharts-elmDpR4Z"><script src="https://app.everviz.com/inject/elmDpR4Z/" defer="defer"><\/script></div>',
          html: '<div class="utah"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($24.69/hour)</li><li>Sales, marketing, or customer service ($32.48/hour)</li><li>Technicians/mechanical support ($21.82/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Utah-2020.pdf">Read the Utah Report</a></p> </div>'
    },
    VT: { fullName: 'Vermont',
          graph: '<div id="highcharts-YR5FhIoe"><script src="https://app.everviz.com/inject/YR5FhIoe/" defer="defer"><\/script></div>',
          html: '<div class="vermont"><strong>Most in-demand energy jobs</strong><ol><li>Installation workers ($27.33/hour)</li><li>Engineers/scientists ($41.07/hour)</li><li>Technicians/mechanical support ($23.84/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Vermont-2020.pdf">Read the Vermont Report</a></p> </div>'
    },
    VA: { fullName: 'Virginia',
          graph: '<div id="highcharts-TzAi1n-6"><script src="https://app.everviz.com/inject/TzAi1n-6/" defer="defer"><\/script></div>',
          html: '<div class="virginia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($20.28/hour)</li><li>Management — directors, supervisors, vice presidents ($37.13/hour)</li><li>Engineers/scientists ($35.46/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Virginia-2020.pdf">Read the Virginia Report</a></p> </div>'
    },
    WA: { fullName: 'Washington',
          graph: '<div id="highcharts-vSc1ypFK"><script src="https://app.everviz.com/inject/vSc1ypFK/" defer="defer"><\/script></div>',
          html: '<div class="washington"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($28.59/hour)</li><li>Sales, marketing, or customer service ($35.35/hour)</li><li>Technicians/mechanical support ($24.32/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Washington-2020.pdf">Read the Washington Report</a></p> </div>'
    },
    WI: { fullName: 'Wisconsin',
          graph: '<div id="highcharts-Rw4Kxw64"><script src="https://app.everviz.com/inject/Rw4Kxw64/" defer="defer"><\/script></div>',
          html: '<div class="wisconsin"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.25/hour)</li><li>Installation workers ($20.51/hour)</li><li>Management — directors, supervisors, vice presidents ($43.21/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Wisconsin-2020.pdf">Read the Wisconsin Report</a></p> </div>'
    },
    WV: { fullName: 'West Virginia',
          graph: '<div id="highcharts-kq7CLKVr"><script src="https://app.everviz.com/inject/kq7CLKVr/" defer="defer"><\/script></div>',
          html: '<div class="westvirginia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($20.28/hour)</li><li>Installation workers ($20.65/hour)</li><li>Electricians/construction workers ($22.79/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/WestVirginia-2020.pdf">Read the West Virginia Report</a></p> </div>'
    },
    WY: { fullName: 'Wyoming',
          graph: '<div id="highcharts-FlvnixzO"><script src="https://app.everviz.com/inject/FlvnixzO/" defer="defer"><\/script></div>',
          html: '<div class="wyoming"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction workers ($24.69/hour)</li><li>Technicians/mechanical support ($21.82/hour)</li><li>Installation workers ($22.18/hour)</li></ol></div>',
          source: '<div class="sources"><p><strong>More data:</strong><br/><a target="_blank" href="https://www.usenergyjobs.org/s/USEER-Energy-Employment-by-State-2020.pdf">Read the 2020 Energy Employment by State report</a><br/><a target="_blank" href="https://www.usenergyjobs.org/s/Wyoming-2020.pdf">Read the Wyoming Report</a></p> </div>'
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
