---
time: 
tags: 
child:
---
## Definition of time series:
- a series of figures or values recorder over time
	- [time series example](https://i.imgur.com/RcCY4d0.png)

## Components: 
- 4 components of time series:
### [Time Series Trend](https://i.imgur.com/G4vtzPf.png)
- A continuous long-term movement over time in the values recorded
- Upward, downward vs horizontal
### [Seasonal Variation](https://i.imgur.com/Tanm3F9.png)
- Movements in the time series that reoccur each year about the same time due to the change in the seasons.
	- example, the spending in ice cream is higher during summer
### [Cyclical Variation](https://i.imgur.com/t327KZM.png)
- Many variables often exhibit a tendency to fluctuate above and below the long-term trend over a long period of time.
- They cover much longer time periods than do seasonal variations.
### Random Variation
- Caused by unusual and unexpected occurrences producing movements which have no discernible pattern.
- These movements are unique and unlikely to reoccur in similar fashion.
- They can be caused by events such as wars, floods, earthquakes, political elections, or oil embargoes.

## Time Series Models:
- A time series model can be expressed as some combination of these four components.
- Two types of models are commonly associated with time series: Additive Model and multiplicative model.
    - The additive model is expressed as $Y=T+S+C+R$ where
        - Y is the actual time series
        - T is the trend series
        - S is the seasonal component (Not included in some models)
        - C is the cyclical component (excluded)
        - R is the random component
	- We only consider **$Y=T+S+R$**
