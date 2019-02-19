$(document).ready(function() {
  var stateData = {
    AL: { fullName: 'Alabama',
          html: '<div class="alabama"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Management - directors, supervisors, vice presidents ($41.96/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          graph: '<div id="highcharts-MnxDN7MtM"><script src="https://cloud.highcharts.com/inject/MnxDN7MtM/" defer="defer"><\/script></div>'
    },
    AK: { fullName: 'Alaska',
          html: '<div class="alaska"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li><li>Engineers/scientists ($29.49/hour)</li></ol></div>',
          graph: '<div id="highcharts-alDcU_fHq"><script src="https://cloud.highcharts.com/inject/alDcU_fHq/" defer="defer"><\/script></div>'
    },
    AZ: { fullName: 'Arizona',
          html: '<div class="arizona"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          graph: '<div id="highcharts-wFGmtXkqY"><script src="https://cloud.highcharts.com/inject/wFGmtXkqY/" defer="defer"><\/script></div>'
    },
    AR: { fullName: 'Arkansas',
          html: '<div class="arkansas"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          graph: '<div id="highcharts-MyMq6FdoO"><script src="https://cloud.highcharts.com/inject/MyMq6FdoO/" defer="defer"><\/script></div>'
    },
    CA: { fullName: 'California',
          html: '<div class="california"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing or customer service ($42.12/hour)</li><li>Management - directors, supervisors, vice presidents ($37.14/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li></ol></div>',
          graph: '<div id="highcharts-OfLhOqRNS"><script src="https://cloud.highcharts.com/inject/OfLhOqRNS/" defer="defer"><\/script></div>'
    },
    CO: { fullName: 'Colorado',
          html: '<div class="colorado"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          graph: '<div id="highcharts-O6N8khWlb"><script src="https://cloud.highcharts.com/inject/O6N8khWlb/" defer="defer"><\/script></div>'
    },
    CT: { fullName: 'Connecticut',
          html: '<div class="connecticut"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li></ol></div>',
          graph: '<div id="highcharts-2DNzV4hDc"><script src="https://cloud.highcharts.com/inject/2DNzV4hDc/" defer="defer"><\/script></div>'
    },
    DC: { fullName: 'District of Columbia',
          html: '<div class="dc"><strong>Most in-demand energy jobs</strong><ol><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Engineers/scientists ($11.41/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          graph: '<div id="highcharts-iYGx7FIxe"><script src="https://cloud.highcharts.com/inject/iYGx7FIxe/" defer="defer"><\/script></div>'
    },
    DE: { fullName: 'Delaware',
          html: '<div class="delaware"><strong>Most in-demand energy jobs</strong><ol><li>Installation workers ($12.80/hour)</li><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li></ol></div>',
          graph: '<div id="highcharts-NzvPxbBOj"><script src="https://cloud.highcharts.com/inject/NzvPxbBOj/" defer="defer"><\/script></div>'
    },
    FL: { fullName: 'Florida',
          html: '<div class="florida"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          graph: '<div id="highcharts--PKmXZXRA"><script src="https://cloud.highcharts.com/inject/-PKmXZXRA/" defer="defer"><\/script></div>'
    },
    GA: { fullName: 'Georgia',
          html: '<div class="georgia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li><li>Drivers/dispatchers ($13.56/hour)</li></ol></div>',
          graph: '<div id="highcharts-nQH7BLxhH"><script src="https://cloud.highcharts.com/inject/nQH7BLxhH/" defer="defer"><\/script></div>'
    },
    HI: { fullName: 'Hawaii',
          html: '<div class="hawaii"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Management - directors, supervisors, vice presidents ($37.14/hour)</li><li>Sales, marketing or customer service ($42.12/hour)</li></ol></div>',
          graph: '<div id="highcharts-c_5X3BYjg"><script src="https://cloud.highcharts.com/inject/c_5X3BYjg/" defer="defer"><\/script></div>'
    },
    IA: { fullName: 'Iowa',
          html: '<div class="iowa"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          graph: '<div id="highcharts-ApdOQV4DU"><script src="https://cloud.highcharts.com/inject/ApdOQV4DU/" defer="defer"><\/script></div>'
    },
    ID: { fullName: 'Idaho',
          html: '<div class="idaho"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li></ol></div>',
          graph: '<div id="highcharts-KauhD_n8J"><script src="https://cloud.highcharts.com/inject/KauhD_n8J/" defer="defer"><\/script></div>'
    },
    IL: { fullName: 'Illinois',
          html: '<div class="illinois"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          graph: '<div id="highcharts-tpObulvZR"><script src="https://cloud.highcharts.com/inject/tpObulvZR/" defer="defer"><\/script></div>'
    },
    IN: { fullName: 'Indiana',
          html: '<div class="indiana"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li></ol></div>',
          graph: '<div id="highcharts-PCKhFM2oZ"><script src="https://cloud.highcharts.com/inject/PCKhFM2oZ/" defer="defer"><\/script></div>'
    },
    KS: { fullName: 'Kansas',
          html: '<div class="kansas"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($27.47/hour)</li><li>Technicians/mechanical support ($25.40/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          graph: '<div id="highcharts-ZnYmEtkSp"><script src="https://cloud.highcharts.com/inject/ZnYmEtkSp/" defer="defer"><\/script></div>'
    },
    KY: { fullName: 'Kentucky',
          html: '<div class="kentucky"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Electricians/construction laborers ($20.23/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          graph: '<div id="highcharts-ZGViQA21A"><script src="https://cloud.highcharts.com/inject/ZGViQA21A/" defer="defer"><\/script></div>'
    },
    LA: { fullName: 'Louisiana',
          html: '<div class="louisiana"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($25.42/hour)</li><li>Technicians/mechanical support ($19.66/hour)</li><li>Sales, marketing or customer service ($30.80/hour)</li></ol></div>',
          graph: '<div id="highcharts-3qzvMH7f2"><script src="https://cloud.highcharts.com/inject/3qzvMH7f2/" defer="defer"><\/script></div>'
    },
    ME: { fullName: 'Maine',
          html: '<div class="maine"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($30.87/hour)</li><li>Technicians/mechanical support ($28.06/hour)</li><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li></ol></div>',
          graph: '<div id="highcharts-Hk_JPX-Sr"><script src="https://cloud.highcharts.com/inject/Hk_JPX-Sr/" defer="defer"><\/script></div>'
    },
    MA: { fullName: 'Massachusetts',
          html: '<div class="massachusetts"><strong>Most in-demand energy jobs</strong><ol><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li></ol></div>',
          graph: '<div id="highcharts-jDxVBNEY2"><script src="https://cloud.highcharts.com/inject/jDxVBNEY2/" defer="defer"><\/script></div>'
    },
    MD: { fullName: 'Maryland',
          html: '<div class="maryland"><strong>Most in-demand energy jobs</strong><ol><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li></ol></div>',
          graph: '<div id="highcharts-EkCro8gZQ"><script src="https://cloud.highcharts.com/inject/EkCro8gZQ/" defer="defer"><\/script></div>'
    },
    MI: { fullName: 'Michigan',
          html: '<div class="michigan"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          graph: '<div id="highcharts-8BMygXl8H"><script src="https://cloud.highcharts.com/inject/8BMygXl8H/" defer="defer"><\/script></div>'
    },
    MN: { fullName: 'Minnesota',
          html: '<div class="minnesota"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Management - directors, supervisors, vice presidents ($38.30/hour)</li></ol></div>',
          graph: '<div id="highcharts-LIdV0ntNF"><script src="https://cloud.highcharts.com/inject/LIdV0ntNF/" defer="defer"><\/script></div>'
    },
    MS: { fullName: 'Mississippi',
          html: '<div class="mississippi"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Installation workers ($16.59/hour)</li><li>Electricians/construction laborers ($20.23/hour)</li></ol></div>',
          graph: '<div id="highcharts-q9-n1haW1"><script src="https://cloud.highcharts.com/inject/q9-n1haW1/" defer="defer"><\/script></div>'
    },
    MO: { fullName: 'Missouri',
          html: '<div class="missouri"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Management - directors, supervisors, vice presidents ($38.30/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          graph: '<div id="highcharts-SjBcvBbLf"><script src="https://cloud.highcharts.com/inject/SjBcvBbLf/" defer="defer"><\/script></div>'
    },
    MT: { fullName: 'Montana',
          html: '<div class="montana"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($30.31/hour)</li><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li></ol></div>',
          graph: '<div id="highcharts-Z0NK2PlVO"><script src="https://cloud.highcharts.com/inject/Z0NK2PlVO/" defer="defer"><\/script></div>'
    },
    NE: { fullName: 'Nebraska',
          html: '<div class="nebraska"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Installation workers ($20.02/hour)</li></ol></div>',
          graph: '<div id="highcharts-qhT6qfuAy"><script src="https://cloud.highcharts.com/inject/qhT6qfuAy/" defer="defer"><\/script></div>'
    },
    NC: { fullName: 'North Carolina',
          html: '<div class="northcarolina"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          graph: '<div id="highcharts-5w1pmcbY-"><script src="https://cloud.highcharts.com/inject/5w1pmcbY-/" defer="defer"><\/script></div>'
    },
    NV: { fullName: 'Nevada',
          html: '<div class="nevada"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Engineers/scientists ($31.88/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          graph: '<div id="highcharts-Eiomo2FpR"><script src="https://cloud.highcharts.com/inject/Eiomo2FpR/" defer="defer"><\/script></div>'
    },
    NH: { fullName: 'New Hampshire',
          html: '<div class="newhampshire"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li><li>Management - directors, supervisors, vice presidents ($53.17/hour)</li></ol></div>',
          graph: '<div id="highcharts-OmTvFCi7u"><script src="https://cloud.highcharts.com/inject/OmTvFCi7u/" defer="defer"><\/script></div>'
    },
    NJ: { fullName: 'New Jersey',
          html: '<div class="newjersey"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.02/hour)</li><li>Management - directors, supervisors, vice presidents ($45.97/hour)</li><li>Electricians/construction laborers ($23.41/hour)</li></ol></div>',
          graph: '<div id="highcharts-BwD0YIhHn"><script src="https://cloud.highcharts.com/inject/BwD0YIhHn/" defer="defer"><\/script></div>'
    },
    NY: { fullName: 'New York',
          html: '<div class="newyork"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.02/hour)</li><li>Sales, marketing or customer service ($28.77/hour)</li><li>Management - directors, supervisors, vice presidents ($45.97/hour)</li></ol></div>',
          graph: '<div id="highcharts-isQy8LivP"><script src="https://cloud.highcharts.com/inject/isQy8LivP/" defer="defer"><\/script></div>'
    },
    NM: { fullName: 'New Mexico',
          html: '<div class="newmexico"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Sales, marketing or customer service ($37.32/hour)</li><li>Management - directors, supervisors, vice presidents ($50.52/hour)</li></ol></div>',
          graph: '<div id="highcharts-xyHVRSX-o"><script src="https://cloud.highcharts.com/inject/xyHVRSX-o/" defer="defer"><\/script></div>'
    },
    ND: { fullName: 'North Dakota',
          html: '<div class="northdakota"><strong>Most in-demand energy jobs</strong><ol><li>Electricians/construction laborers ($27.47/hour)</li><li>Drivers/dispatchers ($15.42/hour)</li><li>Technicians/mechanical support ($25.40/hour)</li></ol></div>',
          graph: '<div id="highcharts-NynbGAB_Y"><script src="https://cloud.highcharts.com/inject/NynbGAB_Y/" defer="defer"><\/script></div>'
    },
    OH: { fullName: 'Ohio',
          html: '<div class="ohio"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          graph: '<div id="highcharts-4qQ2rl-EW"><script src="https://cloud.highcharts.com/inject/4qQ2rl-EW/" defer="defer"><\/script></div>'
    },
    OK: { fullName: 'Oklahoma',
          html: '<div class="oklahoma"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($19.66/hour)</li><li>Electricians/construction laborers ($25.42/hour)</li><li>Sales, marketing or customer service ($30.80/hour)</li></ol></div>',
          graph: '<div id="highcharts-HmwX8EUuC"><script src="https://cloud.highcharts.com/inject/HmwX8EUuC/" defer="defer"><\/script></div>'
    },
    OR: { fullName: 'Oregon',
          html: '<div class="oregon"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li><li>Management - directors, supervisors, vice presidents ($37.14/hour)</li></ol></div>',
          graph: '<div id="highcharts-zFvZkglAT"><script src="https://cloud.highcharts.com/inject/zFvZkglAT/" defer="defer"><\/script></div>'
    },
    PA: { fullName: 'Pennsylvania',
          html: '<div class="pennsylvania"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.02/hour)</li><li>Electricians/construction laborers ($23.41/hour)</li><li>Sales, marketing or customer service ($28.77/hour)</li></ol></div>',
          graph: '<div id="highcharts-_8j6esR8O"><script src="https://cloud.highcharts.com/inject/_8j6esR8O/" defer="defer"><\/script></div>'
    },
    RI: { fullName: 'Rhode Island',
          html: '<div class="rhodeisland"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          graph: '<div id="highcharts-4MAjyziiS"><script src="https://cloud.highcharts.com/inject/4MAjyziiS/" defer="defer"><\/script></div>'
    },
    SC: { fullName: 'South Carolina',
          html: '<div class="southcarolina"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li></ol></div>',
          graph: '<div id="highcharts-VJrAywEd0"><script src="https://cloud.highcharts.com/inject/VJrAywEd0/" defer="defer"><\/script></div>'
    },
    SD: { fullName: 'South Dakota',
          html: '<div class="southdakota"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($25.40/hour)</li><li>Electricians/construction laborers ($27.47/hour)</li><li>Sales, marketing or customer service ($30.62/hour)</li></ol></div>',
          graph: '<div id="highcharts-yDmJWpUl-"><script src="https://cloud.highcharts.com/inject/yDmJWpUl-/" defer="defer"><\/script></div>'
    },
    TN: { fullName: 'Tennessee',
          html: '<div class="tennessee"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($21.72/hour)</li><li>Electricians/construction laborers ($20.23/hour)</li><li>Sales, marketing or customer service ($31.70/hour)</li></ol></div>',
          graph: '<div id="highcharts-LOmvst8Ep"><script src="https://cloud.highcharts.com/inject/LOmvst8Ep/" defer="defer"><\/script></div>'
    },
    TX: { fullName: 'Texas',
          html: '<div class="texas"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($19.66/hour)</li><li>Electricians/construction laborers ($25.42/hour)</li><li>Sales, marketing or customer service ($30.80/hour)</li></ol></div>',
          graph: '<div id="highcharts-t_u-DdfoC"><script src="https://cloud.highcharts.com/inject/t_u-DdfoC/" defer="defer"><\/script></div>'
    },
    UT: { fullName: 'Utah',
          html: '<div class="utah"><strong>Most in-demand energy jobs</strong><ol><li>Sales, marketing or customer service ($37.32/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li><li>Management - directors, supervisors, vice presidents ($50.52/hour)</li></ol></div>',
          graph: '<div id="highcharts-j7YacjYVP"><script src="https://cloud.highcharts.com/inject/j7YacjYVP/" defer="defer"><\/script></div>'
    },
    VT: { fullName: 'Vermont',
          html: '<div class="vermont"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($28.06/hour)</li><li>Engineers/scientists ($54.35/hour)</li><li>Electricians/construction laborers ($30.87/hour)</li></ol></div>',
          graph: '<div id="highcharts-ArScpvknN"><script src="https://cloud.highcharts.com/inject/ArScpvknN/" defer="defer"><\/script></div>'
    },
    VA: { fullName: 'Virginia',
          html: '<div class="virginia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Management - directors, supervisors, vice presidents ($36.48/hour)</li><li>Installation workers ($12.80/hour)</li></ol></div>',
          graph: '<div id="highcharts-SAf3X44b8"><script src="https://cloud.highcharts.com/inject/SAf3X44b8/" defer="defer"><\/script></div>'
    },
    WA: { fullName: 'Washington',
          html: '<div class="washington"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.66/hour)</li><li>Sales, marketing or customer service ($42.12/hour)</li></ol></div>',
          graph: '<div id="highcharts-xJvD-cTI4"><script src="https://cloud.highcharts.com/inject/xJvD-cTI4/" defer="defer"><\/script></div>'
    },
    WI: { fullName: 'Wisconsin',
          html: '<div class="wisconsin"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($26.84/hour)</li><li>Electricians/construction laborers ($24.21/hour)</li><li>Sales, marketing or customer service ($34.87/hour)</li></ol></div>',
          graph: '<div id="highcharts-ArIA13qlp"><script src="https://cloud.highcharts.com/inject/ArIA13qlp/" defer="defer"><\/script></div>'
    },
    WV: { fullName: 'West Virginia',
          html: '<div class="westvirginia"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($12.81/hour)</li><li>Electricians/construction laborers ($12.33/hour)</li><li>Sales, marketing or customer service ($26.45/hour)</li></ol></div>',
          graph: '<div id="highcharts-tqSwMpzFk"><script src="https://cloud.highcharts.com/inject/tqSwMpzFk/" defer="defer"><\/script></div>'
    },
    WY: { fullName: 'Wyoming',
          html: '<div class="wyoming"><strong>Most in-demand energy jobs</strong><ol><li>Technicians/mechanical support ($23.95/hour)</li><li>Drivers/dispatchers ($29.89/hour)</li><li>Electricians/construction laborers ($30.31/hour)</li></ol></div>',
          graph: '<div id="highcharts-_CXHiNLXx"><script src="https://cloud.highcharts.com/inject/_CXHiNLXx/" defer="defer"><\/script></div>'
    },
  }


  $('#map').usmap({
    click: function(event, data) {
      $('#stateInfo')
          .html('<h1>' + stateData[data.name].fullName + '</div>')
          .append(stateData[data.name].html)
          .append(stateData[data.name].graph)
      }

    });

    $('#map').css('width' , '100%').css('height' , '100%')
});
