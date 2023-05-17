const el = document.getElementById('chart-area_');
                const data = {
                categories: ['Browser'],
                series: [
                    {
                    name: 'Chrome',
                    data: 46.02,
                    },
                    {
                    name: 'IE',
                    data: 20.47,
                    },
                    {
                    name: 'Firefox',
                    data: 17.71,
                    },
                    {
                    name: 'Safari',
                    data: 5.45,
                    },
                    {
                    name: 'Opera',
                    data: 3.1,
                    },
                    {
                    name: 'Etc',
                    data: 7.25,
                    },
                ],
                };
                const options = {
                chart: { title: 'Usage share of web browsers', width: 600, height: 400 },
                series: {
                    radiusRange: {
                    inner: '40%',
                    outer: '100%',
                    },
                },
                };
                const chart = toastui.Chart.pieChart({ el, data, options });