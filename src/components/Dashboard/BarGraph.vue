<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default {
    extends: Bar,
    props:['pregunta'],
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: [],
          datasets: [
            {
              label: 'Votos',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: []
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods:{
      obtenerLabels(){
        let labels = []

        for(let i = 0; i < this.pregunta.respuestas.length ; i++){
          labels.push(this.pregunta.respuestas[i].respuesta)
        } 

        return labels
      },
      obtenerDataCantidadVotos(){
        let data = []

        for(let i = 0; i < this.pregunta.respuestas.length ; i++){
          data.push(this.pregunta.respuestas[i].cantidad_votos)
        } 

        return data
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.datacollection.labels = this.obtenerLabels()
      this.datacollection.datasets[0].data = this.obtenerDataCantidadVotos()
      console.log(this.obtenerDataCantidadVotos())
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>