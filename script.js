// Code goes here

angular.module('a',['ionic','nvd3','googlechart','highcharts-ng'])
    .controller('b',function($scope,$http) {
        $http.get('performance.json').success(function(data) {
            $scope.performance  = data;
        }).error(function(error) {
                console.log(error);
            });

        $scope.getGradeClass = function(grade) {
            //console.log(grade);
            // console.log(grade.charAt(0));
            var gradeClass = 'A-grade';
            if(grade.charAt(0) == 'A') {
                gradeClass = 'A-grade'
            } else if(grade.charAt(0) == 'B') {
                gradeClass = 'B-grade'
            } else if(grade.charAt(0) == 'C') {
                gradeClass = 'C-grade'
            } else {
                gradeClass = 'O-grade'
            }

            return gradeClass;
        };

        /* Chart options */
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
               // height:450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d){ return d.label; },
                y: function(d){ return d.value; },
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

        /* Chart data */
        $scope.data = [{
            key: "Cumulative Return",
            values: [
                { "label" : "A" , "value" : 29.765957771107 },
                { "label" : "B" , "value" : 0 },
                { "label" : "C" , "value" : 32.807804682612 },
                { "label" : "D" , "value" : 196.45946739256 },
                { "label" : "E" , "value" : 0.19434030906893 },
                { "label" : "F" , "value" : 98.079782601442 },
                { "label" : "G" , "value" : 13.925743130903 },
                { "label" : "H" , "value" : 5.1387322875705 }
            ]
        }];


        $scope.chart = {
            labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            datasets : [
                {
                    fillColor : "rgba(151,187,205,0)",
                    strokeColor : "#e67e22",
                    pointColor : "rgba(151,187,205,0)",
                    pointStrokeColor : "#e67e22",
                    data : [4, 3, 5, 4, 6]
                },
                {
                    fillColor : "rgba(151,187,205,0)",
                    strokeColor : "#f1c40f",
                    pointColor : "rgba(151,187,205,0)",
                    pointStrokeColor : "#f1c40f",
                    data : [8, 3, 2, 5, 4]
                }
            ]
        };

        $scope.myChartOptions =  {
            //Boolean - Whether we should show a stroke on each segment
            segmentShowStroke : true,

            //String - The colour of each segment stroke
            segmentStrokeColor : "#fff",

            //Number - The width of each segment stroke
            segmentStrokeWidth : 24,

            //The percentage of the chart that we cut out of the middle.
            percentageInnerCutout : 50,

            //Boolean - Whether we should animate the chart
            animation : true,

            //Number - Amount of animation steps
            animationSteps : 100,

            //String - Animation easing effect
            animationEasing : "easeOutBounce",

            //Boolean - Whether we animate the rotation of the Doughnut
            animateRotate : true,

            //Boolean - Whether we animate scaling the Doughnut from the centre
            animateScale : false,

            //Function - Will fire on animation completion.
            onAnimationComplete : null
        };

        $scope.sampleData = {
            "type": "ColumnChart",
            "cssStyle": "height:200px; width:300px;",
            "data": {
                "cols": [
                    {
                        "id": "month",
                        "label": "Month",
                        "type": "string"
                    },
                    {
                        "id": "laptop-id",
                        "label": "Laptop",
                        "type": "number"
                    },
                    {
                        "id": "desktop-id",
                        "label": "Desktop",
                        "type": "number"
                    },
                    {
                        "id": "server-id",
                        "label": "Server",
                        "type": "number"
                    },
                    {
                        "id": "cost-id",
                        "label": "Shipping",
                        "type": "number"
                    }
                ],
                "rows": [
                    {
                        "c": [
                            {
                                "v": "January"
                            },
                            {
                                "v": 19,
                                "f": "42 items"
                            },
                            {
                                "v": 12,
                                "f": "Ony 12 items"
                            },
                            {
                                "v": 7,
                                "f": "7 servers"
                            },
                            {
                                "v": 4
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "February"
                            },
                            {
                                "v": 13
                            },
                            {
                                "v": 1,
                                "f": "1 unit (Out of stock this month)"
                            },
                            {
                                "v": 12
                            },
                            {
                                "v": 2
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "March"
                            },
                            {
                                "v": 24
                            },
                            {
                                "v": 0
                            },
                            {
                                "v": 11
                            },
                            {
                                "v": 6
                            }
                        ]
                    }
                ]
            },
            "options": {
                "title": "Sales per month",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,
                "vAxis": {
                    "title": "Sales unit",
                    "gridlines": {
                        "count": 6
                    }
                },
                "hAxis": {
                    "title": "Date"
                }
            },
            "formatters": {}
        };


        $scope.addPoints = function () {
            var seriesArray = $scope.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        };

        $scope.addSeries = function () {
            var rnd = [];
            for (var i = 0; i < 10; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1)
            }
            $scope.chartConfig.series.push({
                data: rnd
            })
        };

        $scope.removeRandomSeries = function () {
            var seriesArray = $scope.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1)
        };

        $scope.toggleLoading = function () {
            this.chartConfig.loading = !this.chartConfig.loading
        };

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'line',
                    zoomType: 'x'
                }
            },
            series: [{
                data: [10, 15, 12, 8, 7, 1, 1, 19, 15, 10]
            },{
                data: [14,4,6,12,5,4,21,3,16,23]
            }],
            title: {
                text: 'Hello'
            },
            xAxis: {currentMin: 0, currentMax: 10, minRange: 1},
            loading: false
        }
    });