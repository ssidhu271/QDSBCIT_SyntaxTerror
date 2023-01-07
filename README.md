# QDSBCIT_SyntaxTerror


Truck Fuel Consumption Dataset

Introduction
The goal of a mining operation is to extract material from the ground, process what is valuable, and then safely store and manage the waste in the most efficient way. Therefore, miners define and monitor various key performance indicators (KPIs) depending on the operation type and specific properties. The KPIs allow the operation to evaluate different shifts and personnel, predict future performance, identify sources of variation, and determine opportunities for improving the processes. 
The truck-shovel process is the most common way to extract materials from the ground in an open-pit mine. The process does not just rely on trucks and shovels, as the name suggests, but also on auxiliary equipment that needs to be utilized to make the process run effectively and efficiently. The mining operation schedules all equipment tasks and monitors them closely using their status and location in order to identify the impact of equipment performance on each other and on the operation as a whole. 
A sustainable mining operation aims at moving the material in a sustainable way, burning less fuel, emitting less GHG and keeping the delays and idling to a minimum. One of the most complex and critical decisions in the mining operation is how to allocate haul trucks to different shovels. Different allocations could result in different levels of productivity and different levels of fuel consumption. The goal of this exercise is to find ways to move the same amount of material from the shovels to dumps with the least amount of fuel consumed.

Dataset definition
The attached dataset consists of haul truck sensor data for one week of operation at a coal mining operation. Every row of the dataset is a reading of truck location and its instantaneous fuel burn rate. The values are collected on a two second time interval while the time the truck is doing a haul cycle (traveling empty, queueing at the shovel, spotting, loading, hauling to dump, wait at dump and dumping) and when it is delaying for any reason.
The mine runs different truck types and they have different sizes and burn fuel in different rates. The dataset has been transformed and anonymized to protect the intellectual property of the company. The original dataset is randomly broken into 10 files to make file transfers and importing data easier.

The following columns are present in the dataset:
ID	Column Name	Data Type	Description
0	TIMESTAMP	Timestamp	Location recording timestamp
1	GPSNORTHING	Float	Northing in UTM
2	GPSEASTING	Float	Easting in UTM
3	GPSELEVATION	Float	Elevation UTM
4	FUEL_RATE	Float	The l/hr fuel burn rate
5	STATUS	String	The truck status including haul cycle and delays
6	PAYLOAD	Float	The payload the unit is carrying
7	TRUCK_ID	Integer	A unique index identifying the truck
8	TRUCK_TYPE_ID	Integer	A unique index identifying the truck type
9	SHOVEL_ID	Integer	The index of the shovel that loaded the truck
10	DUMP_ID	Integer	The index of the dump location where the truck dumped its load
11	RND	Integer	Random number generated to separate the dataset into smaller subsets

Hints
1.	You need to calculate the total material moved from every shovel to every dump and find a solution that moves similar amounts of material
2.	Every route, connecting a shovel to a dump, is unique and has its unique properties which could impact the amount of fuel consumed on the route
3.	The truck fuel consumption is correlated with its type, the road it is driving on and the payload it is carrying
4.	Driving faster and driving on steeper roads usually increases the fuel consumption
