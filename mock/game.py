from beans.Node import Node
from beans.Ship import Ship

GAME_MODE = 'COLONIZE'

def distance(sourceRow, sourceCol, targetRow, targetCol):
	return ((targetRow-sourceRow)**2+(targetCol-sourceCol)**2)**(1/2)




if __name__=="__main__":
	nodes = []

	if GAME_MODE == 'EXPLORE':
		nodes.append(Node("Sun", 0, 0, 0, 0, 0, True).get_node())
		nodes.append(Node("Alpha Centauri", 10, 10, 0, 40, 20).get_node())
		nodes.append(Node("Sirius", 10, -10, 0, 30, 20).get_node())
		nodes.append(Node("Altar", 10, -20, 0, 12, 50).get_node())
		nodes.append(Node("Aldebaran", 35, 20, 0, 50, 20).get_node())
		nodes.append(Node("Proxima Centauri", -5, 5, 0, 30, 12).get_node())

	elif GAME_MODE == 'COLONIZE':
		nodes.append(Node("Sun", 0, 0, 0, 0, 0, True).get_node())
		nodes.append(Node("Alpha Centauri", 10, 10, 9, 1, 0.5).get_node())
		nodes.append(Node("Sirius", 10, -10, 6, 1.2, 0.2).get_node())
		nodes.append(Node("Altar", 10, -20, 15, 1.2, 1).get_node())
		nodes.append(Node("Aldebaran", 35, 20, 10, 0.6, 0.3).get_node())
		nodes.append(Node("Proxima Centauri", -5, 5, 5, 0.1, 0.2).get_node())


	current = Ship("USS Enterprise", 0, 0).get_node()


	while True:
		output = ''

		for node_index in range(0,len(nodes)):
			nodes[node_index]['distance'] = distance(current['row'], current['col'], nodes[node_index]['row'], nodes[node_index]['col'])

			if GAME_MODE == 'EXPLORE':
				output = output + str(node_index) + " - " + nodes[node_index]['name'] + ". Distance: " + str(round(nodes[node_index]['distance'],2))
				if nodes[node_index]['colonized']:
					output = output + ' - Explored'

			elif GAME_MODE == 'COLONIZE':
				output = output + str(node_index) + " - " + nodes[node_index]['name'] + ". Distance: " + str(round(nodes[node_index]['distance'],2))
				if nodes[node_index]['colonized']:
					output = output + ' - Colonized - Science Rate: ' + str(nodes[node_index]['science']) + " - Material Rate: " + str(nodes[node_index]['materials'])
				else:
					output = output + ' - Time to colonize: ' + str(nodes[node_index]['time_to_colonize'])
			output = output + "\n"

		print(output)
		print(f"{current['name']}\nScience: {round(current['science'],2)}\nMaterials: {round(current['materials'],2)}\nFuel: {round(current['fuel'],2)}\nMission Duration: {current['age']}")

		destination = int(input("\nSelect a destination number: "))

		current['col'] = nodes[destination]['col']
		current['row'] = nodes[destination]['row']
		current['age'] += nodes[destination]['distance']

		if GAME_MODE == 'EXPLORE':
			current['science'] += nodes[destination]['science']
			current['materials'] += nodes[destination]['materials']
			if nodes[destination]['colonized']:
				current['fuel'] = 100
			else: 
				current['fuel'] -= nodes[destination]['distance']
			nodes[destination]['science'] = 0
			nodes[destination]['materials'] = 0

		if GAME_MODE == 'COLONIZE':
			current['science'] += current['science_rate'] * nodes[destination]['distance']
			current['materials'] += current['materials_rate'] * nodes[destination]['distance']
			if nodes[destination]['colonized']:
				current['fuel'] = 100
			else:

				current['age'] += nodes[destination]['time_to_colonize']
				current['science'] += current['science_rate'] * nodes[destination]['time_to_colonize']
				current['materials'] += current['materials_rate'] * nodes[destination]['time_to_colonize']
				current['science_rate'] += nodes[destination]['science']
				current['materials_rate'] += nodes[destination]['materials']
				nodes[destination]['colonized'] = True

		nodes[destination]['colonized'] = True

		if current['science'] > 100:
			print(f"Victory\nMission Duration: {current['age']}")
			break