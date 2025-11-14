import ApiController from './ApiController'
import ClientController from './ClientController'
import DashboardController from './DashboardController'
import KeyController from './KeyController'
import ModController from './ModController'
import ModpackController from './ModpackController'
import SolderController from './SolderController'
import UserController from './UserController'
import AuthController from './AuthController'
import V1 from './V1'
const Controllers = {
    ApiController: Object.assign(ApiController, ApiController),
ClientController: Object.assign(ClientController, ClientController),
DashboardController: Object.assign(DashboardController, DashboardController),
KeyController: Object.assign(KeyController, KeyController),
ModController: Object.assign(ModController, ModController),
ModpackController: Object.assign(ModpackController, ModpackController),
SolderController: Object.assign(SolderController, SolderController),
UserController: Object.assign(UserController, UserController),
AuthController: Object.assign(AuthController, AuthController),
V1: Object.assign(V1, V1),
}

export default Controllers