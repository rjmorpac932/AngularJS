import { Component } from '@angular/core';
import { ClipboardComponent } from '../../clipboard/clipboard.component';

@Component({
  selector: 'app-modulo-cinco',
  standalone: true,
  imports: [ClipboardComponent],
  templateUrl: './modulo-cinco.component.html',
  styleUrl: '../modulo.css'
})
export class ModuloCincoComponent {
cCreacionComponenteHttp = 
`ng new peticionesHttp
ng g component form`;

cCreacionServicioApi = 
`//Servicio Construido en Java con SpringBoot
@Service
@Transactional
public class TesterService {
	
	@Autowired
	private TesterRepository trepositorio;
	
	@Autowired
	private CiudadRepository ciudadRepository;
	
	public List<Ciudad> findAllCiudades() {
		return trepositorio.findAllCiudades();
	}
	
	public Ciudad createCiudad(String codigo, String descripcion) {
		Ciudad ciudad = new Ciudad();
		ciudad.setCodigo(codigo);
		ciudad.setDescripcion(descripcion);
		ciudadRepository.save(ciudad);
		return ciudad;
	}
	
	public Ciudad updateCiudad(Long id, String codigo, String descripcion) {
		Optional<Ciudad> ciudad = ciudadRepository.findById(id);
		if(ciudad.isPresent()) {
			Ciudad c = ciudad.get();
			c.setCodigo(codigo);
			c.setDescripcion(descripcion);
			ciudadRepository.save(c);
			return c;
		}else {
			return null;
		}
	}
	
	public String deleteCiudad(Long id) {
		Optional<Ciudad> ciudad = ciudadRepository.findById(id);
		if(ciudad.isPresent()) {
			Ciudad c = ciudad.get();
			ciudadRepository.delete(c);;
			return "Usuario eliminado correctamente";
		}else {
			return null;
		}
	}
	
	public Ciudad actualizarCiudad(String codigo, String descripcion) {
		Ciudad ciudad = ciudadRepository.seleccionarCiudad(codigo);
		ciudad.setDescripcion(descripcion);
		ciudadRepository.save(ciudad);
		return ciudad;
	}
	
	public Ciudad eliminarCiudad(String codigo, String descripcion) {
		Ciudad ciudad = ciudadRepository.seleccionarCiudad2(codigo, descripcion);
		ciudadRepository.delete(ciudad);
		return null;
	}
}`;

cCreacionControladorApi = 
`//Controlador Construido en Java con SpringBoot
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api")
public class TesterController {
	
	@Autowired
	private TesterService servicio;
	@GetMapping("/ciudades")
	public ResponseEntity<List<Ciudad>> findAllCiudades() {
		return ResponseEntity.ok().body(servicio.findAllCiudades());
	}
	
	@PostMapping("/crearCiudad")
	public ResponseEntity<Ciudad> createCiudad(@RequestBody Ciudad ciudad){
		return ResponseEntity.ok().body(servicio.createCiudad(ciudad.getCodigo(), ciudad.getDescripcion()));
	}
	
	@PutMapping("/actualizarCiudad/{id}")
	public ResponseEntity<Ciudad> updateCiudad(@PathVariable("id") Long id, @RequestBody Ciudad ciudad){
		return ResponseEntity.ok().body(servicio.updateCiudad(id, ciudad.getCodigo(), ciudad.getDescripcion()));
	}
	
	@DeleteMapping("/eliminarCiudad/{id}")
	public ResponseEntity<String> deleteCiudad(@PathVariable("id") Long id){
		return ResponseEntity.ok().body(servicio.deleteCiudad(id));
	}
	
	@PutMapping("/actualizarCiudad")
	public ResponseEntity<Ciudad> actualizarCiudad(@RequestBody Ciudad ciudad){
		return ResponseEntity.ok().body(servicio.actualizarCiudad(ciudad.getCodigo(), ciudad.getDescripcion()));
	}
	
	@DeleteMapping("/eliminarCiudad")
	public ResponseEntity<Ciudad> eliminarCiudad(  @PathParam("codigo") String codigo,
	        @PathParam("descripcion") String descripcion){
		return ResponseEntity.ok().body(servicio.eliminarCiudad(codigo, descripcion));
	}
}`;

cMostrarCiudades = `<button (click)="mostrarCiudades()">Mostrar Ciudades</button>`;

cUsuarioNombre = `{{usuario.nombre}}`
cFechaDate = `{{fecha | date:'yyyy-MM-dd'}}`
}
